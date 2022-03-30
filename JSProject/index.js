$(document).ready(function(){


    let count=0;


    console.log("Sakam");


    $("#btn1").click(function(){
        $('#h1').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
        $("h2").css("visibility","visible")
        $("#h1").animate({
            paddingTop: "40px",
        },1000,function(){

            $("#h2").animate({
                paddingLeft:'3px'
                
            },1500,function(){
                $("#btn1").animate({
                    paddingTop:"0em",
                    paddingLeft:"0em"
                },1000)
            })
          

        });

       
    })

    $("#btn2").click(function(){
        ++count;
        if(count==1){

            $('#shadow-div').css({visibility: "hidden"}).animate({opacity: 0}, 200);
            $("#h12").css("display","block")
            $("#h22").css("display","block")
            $("#btn11").css("display","block")
            
            $("#h1").animate({
                marginLeft:"-125em",
                width:"-=35em"
                
            },2000)
            $("#h2").animate({
                marginLeft:"-125em",
                width:"-=35em"
                
                
            },2000)
            $("#i1").animate({
                
                marginLeft: "-125em"
                
            },2000,function(){
                $('#shadow-div').css({visibility: "visible"}).animate({opacity: 0}, 200);
                $("#i2").show();
                
                
            });
            $("#h12").animate({
                marginLeft:"6em"
                
            })
            $("#h22").animate({
                marginLeft:"20em"
                
            })
            
        }
        else if(count==2){
            $("#btn1").css("display","none")
            $("#btn11").css("display","none")

             $('#shadow-div').css({visibility: "hidden"}).animate({opacity: 0}, 200);
                $("#h13").css("display","block")
                $("#h23").css("display","block")
                $("#btn12").css("display","block")
                $("#btn13").css("display","block")
        
                $("#h12").animate({
                    marginLeft:"125em",
                    width:"-=35em"
                    
                },2000)
                $("#h22").animate({
                    marginLeft:"125em",
                    width:"-=35em"
                    
                    
                    
                },2000)
                $("#i2").animate({
                
                    marginLeft: "-125em"
                    
                },2000,function(){
                    $('#shadow-div').css({visibility: "visible"}).animate({opacity: 0}, 200);
                    $("#i3").show();
                    
                    
                });

              
        
            }
            else if(count==3){
                $("#btn12").css("display","none")
                $("#btn13").css("display","none")

                $('#shadow-div').css({visibility: "hidden"}).animate({opacity: 0}, 200);
                $("#h14").css("display","block")
                $("#h24").css("display","block")
                $("#btn14").css("display","block")

                $("#h13").animate({
                    marginTop:"-20em"
                },3000,function(){
                    $("#h13").css("display","none")
                    $("#h23").animate({
                        marginTop:"30em",
                        opacity:0
                    },2000)
                    $('#shadow-div').css({visibility: "hidden"}).animate({opacity: 0}, 200);

                })
                

                $("#i3").animate({
                    marginLeft:"-80em"

                },2000,function(){
                    $('#shadow-div').css({visibility: "visible"}).animate({opacity: 0}, 200);
                    $("#i4").show();
                })
            }
            
            
        })
        $("#btn3").click(function(){
           count=0;
            if(count==0){
                $("*").css("margin","0")
                $("*").css("padding","0")

                $("#first-div").css("margin-top","2em")
                $("#first-div").css("width","90%")
                $("#first-div").css("height","50vh")
                $("#first-div").css("margin-left","5em")
                $("shadow-div").css("margin-top","-30.4em")
                $("#h1").css("margin-top","-4em");
                $("#h1").css("margin-left","8em");
                $("#h1").css("margin-top","-1em");
                $("#h1").css("margin-left","25em");
                $("#btn1").css("margin-left","55em");
                $("#btn1").css("margin-top","7em");
                $("#btn2").css("margin-top","-20em");
                $("#btn2").css("margin-left","130em");
                $("#btn3").css("margin-top","-20em");
                $("#btn3").css("margin-left","5em");
                $("#i2").css("margin-left","19em");
                $("#h12").css("margin-top","-4em");
                $("#h12").css("margin-left","8em");
                $("#h22").css("margin-top","-1em");
                $("#h22").css("margin-left","25em");
                $("#btn11").css("margin-left","55em")
                $("#btn11").css("margin-top","7em")
                $("#h13").css("margin-top","-3em")
                $("#h13").css("margin-left","4em")
                $("#h23").css("margin-top","-6em")
                $("#h23").css("margin-left","30em")
                $("#btn12").css("margin-top","-5em")
                $("#btn12").css("margin-left","45em")
                $("#btn13").css("margin-left","64em")
                $("#btn13").css("margin-top","-3.7em")
                $("#i3").css("margin-left","-39.5em")
                $("#i4").css("margin-left","12em")
                $("#btn14").css("margin-left","55em")
                $("#btn14").css("margin-top","-3.7em")
                $("#h14").css("margin-top","-3em")
                $("#h14").css("margin-left","5em")
                $("#h24").css("margin-top","-6em")
                $("#h24").css("margin-left","30em")

                $("#h12").css("display","none")
                $("#h22").css("display","none")
                 $("#btn11").css("display","none")
                 $("#h13").css("display","none")
                $("#h23").css("display","none")
                $("#btn12").css("display","none")
                $("#btn13").css("display","none")
                $('#shadow-div').css({visibility: "hidden"}).animate({opacity: 0}, 200);
                $("#h14").css("display","none")
                $("#h24").css("display","none")
                $("#btn14").css("display","none")
                $('#h1').css({opacity: 0, visibility: "visible"}).animate({opacity: 1}, 200);
                $("h2").css("display","block")
                $("#btn1").css("display","block")
                $("#i1").css("display","block");
                $("#i2").css("display","none")
                $("#i3").css("display","none")
                $("#i4").css("display","none")
                // $("#i2").css("display","none")
                $('#shadow-div').css({visibility: "hidden"}).animate({opacity: 0}, 200);
                location.reload();
                // $("#i1").show();
                // $("#i1").animate({
                //     marginLeft:"1em"
                // })

                // $("#h12").animate({
                //     marginTop: "-20em"
                // },4000,function(){
                   
                // })

                // $("#h1").animate({
                //     marginLeft:"8em"
                // })
                // $("#h2").animate({
                //     marginLeft:"25em",
                //     width:"+=25em"
                // })
            }
            

        });

        
    });