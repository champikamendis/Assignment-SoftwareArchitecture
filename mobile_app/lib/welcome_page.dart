import 'package:flutter/material.dart';

class Welcome extends StatefulWidget {
  @override
  _WelcomeState createState() => _WelcomeState();
}

class _WelcomeState extends State<Welcome> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            color: Colors.lightBlue[400],
            child: Center(
              child: ListView(
                padding: const EdgeInsets.only(top: 200),
                children: <Widget>[
                  Container(
                    child: Center(
                      child: Image.asset(
                        'images/ocr_974931.png',
                        height: 120,
                        width: 120,
                      ),
                    ),
                    height: 120,
                  ),
                  Container(
                    child: Center(
                      child: Text(
                        "WELCOME",
                        //textDirection: TextDirection.ltr,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 40,
                          fontWeight: FontWeight.w900,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                    height: 60,
                  ),
                  Container(
                    child: Center(
                      child: Text(
                        "Import your Image to be converted",
                        textDirection: TextDirection.ltr,
                        style: TextStyle(
                            fontSize: 20,
                            fontWeight: FontWeight.w900,
                            color: Colors.white),
                        textAlign: TextAlign.center,
                      ),
                    ),
                    height: 50,
                  ),
                  Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(30),
                        color: Colors.white,
                      ),
                      margin: const EdgeInsets.all(20),
                      child: FlatButton(
                          onPressed: () {
                            
                          },
                          child: Center(
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: <Widget>[
                                Text(
                                  "TAKE A PICTURE",
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.w900,
                                      fontSize: 15),
                                  textAlign: TextAlign.center,
                                ),
                                Padding(padding: const EdgeInsets.all(5)),
                                Image.asset('images/Camera.png'),
                              ],
                            ),
                           )
                          ),
                      height: 60
                      ),
                  Container(
                      margin: const EdgeInsets.all(20),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(30),
                        color: Colors.white,
                      ),
                      child: FlatButton(
                          onPressed: () {
                           
                          },
                          child: Center(
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: <Widget>[
                                Text(
                                  "CHOOSE FROM GALLERY",
                                  style: TextStyle(
                                      color: Colors.black,
                                      fontWeight: FontWeight.w900,
                                      fontSize: 15
                                    ),
                                  textAlign: TextAlign.center,
                                ),
                                Padding(padding: const EdgeInsets.all(5)),
                                Image.asset('images/77_Essential_Icons_Photo.png'),
                              ],
                            ),
                           )
                          ),
                      height: 60
                      ),
                ],
              ),
            )
          )
        );
  }
}
