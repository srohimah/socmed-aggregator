
$.ajax({
        url:"http://localhost:3000/twatt/timeline",
        dataType:'json',
        method:'GET',
        success : (result)=>{
            result.map(timeline=>{
                // console.log(timeline)
               $("#timeline").append(timeline.user.name,"<br>")
               $("#timeline").append(timeline.text,"<br><br>")
            })
        },
        error: function (error){
            console.log(error)
        }
    })

    $("#searchtwitt").click(function(){
        $.ajax({
            url:"http://localhost:3000/twatt/search",
            method:'POST',
            data : {
                search : $("#cari").val()
            },
            dataType:'json',
            success : (result)=>{
                // console.log(result)
                result.statuses.map(timeline=>{
                    $("#search").append(timeline.user.name,"<br>")
                    $("#search").append(timeline.text,"<br><br>")
                 })
            },
            error: function (error){
                console.log(error)
            }
        })
    })

    $("#poststatus").click(function(){
        $.ajax({
            url:"http://localhost:3000/twatt/postStatus",
            method:'POST',
            data : {
                status : $("#posting").val()
            },
            dataType:'json',
            success : (result)=>{
                window.location.href = "/";
                // console.log(result)
                // result.map(timeline=>{
                //     $("#search").append(timeline.text)
                //  })
            },
            error: function (error){
                console.log(error)
            }
        })
    })