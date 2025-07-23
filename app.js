import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app=express()
const port=3000

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({urlencoded:true}))

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        weather:null,
        error:null
    })
})
app.post("/weather",async(req,res)=>{
    const city=req.body.city;
    const geoapiurl=`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    try{
        const georesp=await axios.get(geoapiurl);
        const location=georesp.data.results[0];
        if(!location){
            throw new Error("City Not Found");
        }
        const {latitude,longitude,name}=location;
        const weaapiurl=`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=precipitation_probability_max`;

        const apiresp=await axios.get(weaapiurl);
        const weadata=apiresp.data;

        res.render("index.ejs",{
            weather:{
                city:name,
                temperature:weadata.current_weather.temperature,
                windspeed:weadata.current_weather.windspeed,
                rain_percentage:weadata.daily.precipitation_probability_max[0],	
        },error:null
        });
    }
    catch(error){
        res.render("index.ejs",{
            weather:null,
            error:"Could not retrive data.Please try another city"
        });
        console.error("Failed to fetch weather data:", error.message);
    }
})

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})