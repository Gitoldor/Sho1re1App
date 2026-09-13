import {

    LocalNotifications

}

from

"@capacitor/local-notifications";



const testBtn =

document.getElementById(
    "testBtn"
);



testBtn.onclick = async () => {


    try{


        /* =========================
           CHECK PERMISSION
        ========================= */


        let permission =

        await LocalNotifications.checkPermissions();



        /* =========================
           ASK PERMISSION
        ========================= */


        if(

            permission.display !==
            "granted"

        ){


            permission =

            await LocalNotifications
            .requestPermissions();


        }



        /* =========================
           STOP IF DENIED
        ========================= */


        if(

            permission.display !==
            "granted"

        ){


            alert(

                "Notification permission was denied"

            );


            return;


        }



        /* =========================
           SCHEDULE NOTIFICATION
        ========================= */


        const notificationTime =

        new Date(

            Date.now() +
            10000

        );



        await LocalNotifications.schedule({


            notifications:[


                {


                    title:

                    "Sho1re1 🔥",


                    body:

                    "Your native Android notification works!",


                    id:1,


                    schedule:{

                        at:

                        notificationTime

                    }


                }


            ]


        });



        alert(

            "Notification scheduled for 10 seconds!"

        );


    }


    catch(error){


        console.error(error);


        alert(

            "Error: " +
            error.message

        );


    }


};