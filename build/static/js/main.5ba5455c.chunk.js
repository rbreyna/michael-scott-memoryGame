(this["webpackJsonpmichael-scott-memorygame"]=this["webpackJsonpmichael-scott-memorygame"]||[]).push([[0],{18:function(e,a,t){e.exports=t(27)},27:function(e,a,t){"use strict";t.r(a);var c=t(0),i=t.n(c),r=t(5),n=t.n(r),o=t(9),s=t(11),l=t(12),d=t(17),m=t(16);var h=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},g=t(15),f=t(8);var p=function(e){return i.a.createElement(f.a,{bg:"dark",variant:"dark"},i.a.createElement(f.a.Brand,{href:"#home"},i.a.createElement("img",{alt:"The Office Logo",src:"https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/0890/brand.gif?itok=h3ZAhbP2",width:"30",height:"30",className:"d-inline-block align-top"})," ","The Michael Scott Memory Game"),i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item",style:{color:"white",padding:"10px"}}," Current Score: ",e.currentScore),i.a.createElement("li",{className:"nav-item",style:{color:"white",padding:"10px"}}," High Score: ",e.topScore)))},u=t(14);var k=function(e){return i.a.createElement(u.a,{className:"m-1",lg:3,"data-target":e.clicked,src:e.image,onClick:function(){return e.clickHandler(e.id)},width:150,height:150,rounded:!0})},b=t(7),S=(t(26),b),v=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={characters:b,topScore:0,currentScore:0},e.shuffleArray=function(e){for(var a,t,c=e.length;c>0;)a=Math.floor(Math.random()*c),t=e[--c],e[c]=e[a],e[a]=t;return e},e.handleOnClick=function(a){var t;if(console.log("You've clicked "+a+"!"),e.state.characters.find((function(e){return e.id===a})).clicked){t=e.state.characters.findIndex((function(e){return e.id===a})),alert("You've already choosen "+e.state.characters[t].name+"!");for(var c=Object(o.a)(e.state.characters),i=0;i<c.length;i++)c[i].clicked=!1;return e.setState({currentScore:0,characters:c}),console.log(e.state.characters),!0}t=e.state.characters.findIndex((function(e){return e.id===a})),Object(o.a)(e.state.characters)[t].clicked=!0,e.setState({characters:S,currentScore:e.state.currentScore+1},(function(){e.state.currentScore>e.state.topScore&&e.setState({topScore:e.state.currentScore})})),16===e.state.currentScore&&alert("Congrats! You found them all!")},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h,{className:"bg-dark"},i.a.createElement(p,{currentScore:this.state.currentScore,topScore:this.state.topScore}),i.a.createElement("div",{className:"container col-xl-6"},i.a.createElement(g.a,null,this.shuffleArray(this.state.characters).map((function(a){return i.a.createElement(k,{key:a.id,id:a.id,clicked:a.clicked,image:a.image,clickHandler:e.handleOnClick})})))))}}]),t}(c.Component);n.a.render(i.a.createElement(v,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"name":"Michael Scarn","image":"https://www.chicagotribune.com/resizer/a6SixlDOVaSPwxs-czfla1XSq68=/415x233/top/www.trbimg.com/img-5caf9888/turbine/ct-1555011715-tu6nsm36w8-snap-image","clicked":false},{"id":2,"name":"Prison Mike","image":"https://i.pinimg.com/originals/83/1e/4c/831e4ca78b97ee3c646c8244061f0b3b.jpg","clicked":false},{"id":3,"name":"Date Mike","image":"https://i.pinimg.com/originals/9b/17/15/9b17158ceabd0f2e0425424c5e05cec5.jpg","clicked":false},{"id":4,"name":"Michael Klump","image":"https://i.pinimg.com/originals/f4/91/46/f49146d4550fba19a013ced696f19111.jpg","clicked":false},{"id":5,"name":"Santa Bond","image":"https://i.redd.it/yvwakgexq3y11.jpg","clicked":false},{"id":6,"name":"Ping","image":"https://i.ytimg.com/vi/a4MTPliqKvA/maxresdefault.jpg","clicked":false},{"id":7,"name":"Blind Guy McSqueezy","image":"https://pm1.narvii.com/6995/8cac9a3bd39487d8e052fef8bf6f3fc2afdaa314r1-1125-873v2_hq.jpg","clicked":false},{"id":8,"name":"Michael The Magic","image":"https://img.cinemablend.com/cb/6/1/d/f/e/d/61dfed88e82cbdee7db62a30ce15f161be3e5d0682a1533bdb9aa0135b87a13e.jpg","clicked":false},{"id":9,"name":"Caleb Crawdad","image":"https://31.media.tumblr.com/d720c0dfd15241072a6f587ee81dc141/tumblr_n5jyc5vUGd1s48uaao2_1280.png","clicked":false},{"id":10,"name":"Carnac","image":"https://images.squarespace-cdn.com/content/v1/5c9944d27980b35d18eb999c/1561156131445-Y0CXGN6R5KNLYZMG3Q5R/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/michael-scott-photos.jpg","clicked":false},{"id":11,"name":"Mykonos","image":"https://vignette.wikia.nocookie.net/theoffice/images/1/18/Mykonos.jpg/revision/latest/top-crop/width/360/height/360?cb=20140716002312","clicked":false},{"id":12,"name":"Michael Scotch","image":"https://i.redd.it/zfhgd7et0jj21.jpg","clicked":false},{"id":13,"name":"World\'s Best Boss","image":"https://miro.medium.com/max/1396/1*njwXqsShWvK81ANQCMBevw.jpeg","clicked":false},{"id":14,"name":"Michael Scott Paper Company","image":"https://www.hq-digital.com/hs-fs/hubfs/2.0%20Images/Blog/michael-scott-wayne-gretsky-quote-135324-edited.jpg?width=800&name=michael-scott-wayne-gretsky-quote-135324-edited.jpg","clicked":false},{"id":15,"name":"Charles Miner is Gone","image":"https://i.redd.it/hogxrfsoeiy41.png","clicked":false},{"id":16,"name":"Sha-Ta-Ta-Ta-Ta","image":"https://external-preview.redd.it/9KCITYpoJg-qZL-2EpYs3DVSpx0mSP2F2oSACm2449w.png?auto=webp&s=c52a80ef0e42610257a2d01cbf2c42b31d7f9c06","clicked":false}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.5ba5455c.chunk.js.map