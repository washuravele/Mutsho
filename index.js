import e from "express";
import bodyParser from "body-parser";
import axios from "axios";
const port = process.env.PORT || 3000;
const app = e();
const YOUR_ACCESS_KEY = "a5efca817d6a37dd0ef10096db2900cd";


app.use(e.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",(req,res)=>{
   res.render("Home.ejs");
});
app.get("/Gauteng",(req,res)=>{
   res.render("G.ejs");
});
app.get("/EasternCape",(req,res)=>{
   res.render("EC.ejs");
});
app.get("/FreeState",(req,res)=>{
   res.render("FS.ejs");
});
app.get("/KwaZulu-Natal",(req,res)=>{
   res.render("KN.ejs");
});
app.get("/Limpopo",(req,res)=>{
   res.render("L.ejs");
});
app.get("/Mpumalanga",(req,res)=>{
   res.render("M.ejs");
});
app.get("/NorthernCape",(req,res)=>{
   res.render("NC.ejs");
});
app.get("/NorthWest",(req,res)=>{
   res.render("NW.ejs");
});


app.post("/", async (req,res)=>{
    var longitude = req.body.longitude;
    var latitude = req.body.latitude;
   try{
       const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${YOUR_ACCESS_KEY}`);
       const result = response.data;
       
      // console.log(result);
      res.render("Home.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })
   }catch(error){
       
   }

});

app.post("/placesEC", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("EC.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesFS", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("FS.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesG", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("G.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesM", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("M.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesNC", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("NC.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesKN", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("KN.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesL", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("L.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});

app.post("/placesNW", async (req,res)=>{
     var places = req.body.places;
     console.log(places);

     try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${places},ZA&appid=${YOUR_ACCESS_KEY}`);
         const result = response.data;
         console.log(result);

         res.render("NW.ejs",{
          name : result.name,
          country: result.sys.country,
          temperature: Math.floor(result.main.temp),
          weather_description: result.weather[0].description,
          icon:  result.weather[0].icon,
      })

     }catch(error){
  
     }

});


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})