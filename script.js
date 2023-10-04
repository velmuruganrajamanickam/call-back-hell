const hell = document.getElementById("countdown");

const print = (message, cb) => {
    console.log(message);
    hell.innerText = message;
    setTimeout(()=>{cb()},1000)
 
};

print(10, 
    () => print(9, 
        () => print(8, 
            () => print(7, 
                () => print(6, 
                    () => print(5, 
                        () => print(4, 
                            () => print(3, 
                                () => print(2, 
                                    () => print(1, 
                                        () => print(0, 
                                            () => {
                                                hell.innerText = "Happy Independence Day!";
                                                console.log("Happy Independence Day!");
                                            }
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    )
);
