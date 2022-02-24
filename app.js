
const { resolveNaptr } = require('dns');
var express = require('express');
var path = require('path');
var fs = require('fs');
var m=false;
var i=0;
var data = new Array();
var app = express();
var text=""
var u1
var usernames=new Array();
var us;
var session=require('express-session');
app.use(session({secret:'secret-key',resave:false,saveUninitialized:true,}))



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
var r = fs.readFileSync("users.JSON");
 var o =null;
 if(r!=""){
 o = JSON.parse(r);}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

//var t=[{u:[o,1,2]},{a:[1,2,3]}];


//console.log(JSON.parse(fs.readFileSync("readlist.JSON")));
var m =false;var mocking=new Array();
if(fs.readFileSync("mocking.JSON")!=""){
 mocking=JSON.parse(fs.readFileSync("mocking.JSON"));}


app.post('/mocking', function(req, res){
  u1=req.session.user;
  var x
  
  
  if (mocking.indexOf(u1)!=-1){
    
 m=true;
res.render('mockingbird',{text:"this book is already in your readlist!"}) ;

 
}

else{
  mocking.push(u1);
//console.log(list1);
  res.render('mockingbird',{text:"Added!"}) ;fs.writeFileSync("mocking.JSON",JSON.stringify(mocking));
  }});

/////////////

var sun=new Array();
if(fs.readFileSync("sun.JSON")!=""){
 sun=JSON.parse(fs.readFileSync("sun.JSON"));}


app.post('/sun', function(req, res){
  u1=req.session.user;
  var x
  
  
  if (sun.indexOf(u1)!=-1){
    //console.log(sun);
 m=true;
res.render('sun',{text:"this book is already in your readlist!"}) ;

 
}

else{
  sun.push(u1);
//console.log(list1);
  res.render('sun',{text:"Added!"}) ;fs.writeFileSync("sun.JSON",JSON.stringify(sun));
  }});

  



 
////////////////////
var leaves=new Array();
if(fs.readFileSync("leaves.JSON")!=""){
 leaves=JSON.parse(fs.readFileSync("leaves.JSON"));}


app.post('/leaves', function(req, res){
  u1=req.session.user
  var x
  
  
  if (leaves.indexOf(u1)!=-1){
    console.log(leaves);
 m=true;
res.render('leaves',{text:"this book is already in your readlist!"}) ;

 
}

else{
  leaves.push(u1);
//console.log(list1);
  res.render('leaves',{text:"Added!"}) ;fs.writeFileSync("leaves.JSON",JSON.stringify(leaves));
  }});


////////////////////
var grapes=new Array();
if(fs.readFileSync("grapes.JSON")!=""){
 grapes=JSON.parse(fs.readFileSync("grapes.JSON"));}


app.post('/grapes', function(req, res){
  u1=req.session.user;
  var x
  
  
  if(grapes.indexOf(u1)!=-1){
    //console.log(grapes);
 m=true;
res.render('grapes',{text:"this book is already in your readlist!"}) ;

 
}

else{
  grapes.push(u1);
//console.log(list1);
  res.render('grapes',{text:"Added!"}) ;fs.writeFileSync("grapes.JSON",JSON.stringify(grapes));
  }});

///////////////////
var dune=new Array();
if(fs.readFileSync("dune.JSON")!=""){
 dune=JSON.parse(fs.readFileSync("dune.JSON"));}


app.post('/dune', function(req, res){
  u1=req.session.user;
  var x
  
  
  if(dune.indexOf(u1)!=-1){
    //console.log(grapes);
 m=true;
res.render('dune',{text:"this book is already in your readlist!"}) ;

 
}

else{
  dune.push(u1);
//console.log(list1);
  res.render('dune',{text:"Added!"}) ;fs.writeFileSync("dune.JSON",JSON.stringify(dune));
  }});
///////////////////
var flies=new Array();
if(fs.readFileSync("flies.JSON")!=""){
 flies=JSON.parse(fs.readFileSync("flies.JSON"));}


app.post('/flies', function(req, res){
  u1=req.session.user;
  console.log(req.session.user);
  var x
  
  
  if(flies.indexOf(u1)!=-1){
    //console.log(grapes);
 m=true;
res.render('flies',{text:"this book is already in your readlist!"}) ;

 
}

else{
  flies.push(u1);
//console.log(list1);
  res.render('flies',{text:"Added!"}) ;fs.writeFileSync("flies.JSON",JSON.stringify(flies));
  }});
//////////////////
app.get('/', function(req, res){
  //console.log(JSON.parse(fs.readFileSync("users.JSON")));
  res.render('login',{text:""});
});

app.post('/', function(req, res){
  var flag=false;
  var u=req.body.username;
  var p=req.body.password;
  var a={user:JSON.stringify(u),password:JSON.stringify(p)};
  var r1= fs.readFileSync("users.JSON");
  var o1=null;
  if(r1!=""){
   //console.log("here");
   o1= JSON.parse(r1);

   
  for (var m=0;m<o1.length;m++){
   
    if( JSON.stringify(a) == JSON.stringify(o1[m]) ){res.render('home');
    u1=JSON.stringify(u) ;
    us=req.body.username;
    
    req.session.user=u1;req.session.save();
//console.log(req.session.user);
//console.log(JSON.stringify(req.session.user));
//console.log("ok");
flag=true;
  break;}
    else{//console.log(o1[m]);
    }
  }if(flag==false ){//console.log("f");
  res.render('login',{text:"incorrect username or password!"}) ;}
}
  else{ res.render('login',{text:"incorrect username or password!"});
}
  //for (var m=0;m<o1.length;m++){
  //  if( JSON.stringify(a) === JSON.stringify(o1[m]) ){res.render('home');
//console.log("ok")
 // break;}
  //  else{}
  //}}if(m==o1.length || r1==""){res.render('login');}

});
app.get('/novel', function(req, res){
  
  res.render('novel');
});
app.get('/poetry', function(req, res){

  res.render('poetry');
});
app.get('/fiction', function(req, res){
  console.log(req.session.user);
  res.render('fiction');
});


app.get('/flies', function(req, res){

  res.render('flies',{text:""});
});
app.get('/grapes', function(req, res){
 
  res.render('grapes',{text:""});
});
app.get('/leaves', function(req, res){
  
  res.render('leaves',{text:""});
});
app.get('/dune', function(req, res){
  console.log(req.session.user);
  res.render('dune',{text:""});
});
app.get('/sun', function(req, res){

  res.render('sun',{text:""});
});


app.get('/mockingbird', function(req, res){

  res.render('mockingbird',{text:""});

 
  
});

app.get('/readlist', function(req, res){
  u1=req.session.user;
  var read=["","","","","",""];
  var z=0;
  if (dune.includes(u1)){
  read[z]="Dune";
  z=z+1;

  }
  if(leaves.includes(u1)){
    read[z]="Leaves Of Grass";
    z=z+1;
  }
  if(mocking.includes(u1)){
    read[z]="To Kill A Mocking Bird";
    z=z+1;
  }
  if(grapes.includes(u1)){
    read[z]="The Grapes Of Wrath";
    z=z+1;
  }
  if(sun.includes(u1)){
    read[z]="The Sun And Her Flowers";
    z=z+1;
  }
  if(flies.includes(u1)){
    read[z]="The Lord Of flies";
    z=z+1;
  }
  res.render('readlist',{t0:read[0],t1:read[1],t2:read[2],t3:read[3],t4:read[4],t5:read[5]});
});
app.get('/register', function(req, res){
  res.render('registration',{text:""});
});
app.get('/registration', function(req, res){
  res.render('registration',{text:""});
});
app.post('/register', function(req, res){
  var t=fs.readFileSync("usernames.json");
  var x =req.body.username;
  var y=req.body.password;
  var xx={user:JSON.stringify(x)};
  var yy=JSON.stringify(y);
  var z={user:JSON.stringify(x),password:JSON.stringify(y)};
  var conc=new Array();
  var s=new Array();

 // console.log(JSON.stringify(x)=="\"\"");
  if(JSON.stringify(x)=="\"\"" || JSON.stringify(y)=="\"\""){
   
    res.render('registration',{text:"Please enter a valid username or password!"});
  }
  else{ 
if (usernames.length==0&&t!=""){
  conc=JSON.parse(t);
}


else if(t==""&&usernames.length!=0){
  conc=usernames;
}
else if(usernames.length!=0&&t!=""){
  conc=usernames.concat(JSON.parse(t));
}
//console.log(JSON.stringify(conc));
//console.log(usernames.length);
//console.log(JSON.parse(t).length);
if(conc.length!=0){
for(var m=0;m<conc.length;m++){
  s[m]= JSON.stringify(conc[m]);
   
 
 }}
  if((conc.length==0||s.indexOf(JSON.stringify(xx))==-1)){
   // console.log("-1");
  data[i]=z;
  usernames[i]=xx;
  i++;
  //console.log(data);
  if(t==""){
  fs.writeFileSync("usernames.json",JSON.stringify(usernames));
  }
  else{
    var t1=JSON.parse(t);
    //console.log(t1);
    fs.writeFileSync("usernames.json",JSON.stringify(t1.concat(usernames)));}
  
  var user=JSON.stringify(z);
  if(r!=""){
  fs.writeFileSync("users.json",JSON.stringify(o.concat(data)));
  
}
  
  else{ fs.writeFileSync("users.json",JSON.stringify((data)));}
//console.log("BB");}
req.session.user=JSON.stringify(x);req.session.save();

  res.render('home');
     u=JSON.stringify(x) ;    }
  else{ res.render('registration',{text:"This username has been alreeady used!"});}
  //console.log(z);
}});
var books=["Lord of the Flies","The Grapes of Wrath","Leaves of Grass","The Sun and Her Flowers","Dune","To Kill a Mockingbird"]; 
var links=["http://localhost:3000/flies","http://localhost:3000/grapes","http://localhost:3000/leaves","http://localhost:3000/sun","http://localhost:3000/dune","http://localhost:3000/mockingbird"];


app.post('/search', function(req, res){
  
    
var b=["","","","","",""];
var l=["","","","","",""];
var count=0;
var en=false;
var v=req.body.Search;
for(var i=0;i<books.length;i++){
  if(books[i].toUpperCase().includes(v.toUpperCase())){
    en=true;
b[count]=books[i];
l[count]=links[i];
count++;
  }

}var msg="";
if(en==false){
msg="book not found";
}

res.render('searchresults', {msg:msg,t0:b[0],t1:b[1],t2:b[2],t3:b[3],t4:b[4],t5:b[5],a0:l[0],a1:l[1],a2:l[2],a3:l[3],a4:l[4],a5:l[5]}
);


});

if(process.env.PORT){
  app.listen(process.env.PORT,function(){console.log('server started')});
}
else{
  app.listen(3000, function(){console.log('server started')});}
