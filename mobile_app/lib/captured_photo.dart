import 'package:flutter/material.dart';
import 'package:dio/dio.dart';

class ImageView extends StatefulWidget {
  ImageView({Key key, this.photo}): super(key : key);
  final photo;
  @override
  _ImageViewState createState() => _ImageViewState();
}

class _ImageViewState extends State<ImageView> {

  var readText;
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('OCR CONVERTER',
        style: TextStyle(
          fontWeight: FontWeight.w900
           ),
          ),
        backgroundColor: Colors.lightBlue[400],
      ),

      
      body:Center(
          child: ListView(
          children: <Widget>[
            Container(
              padding: const EdgeInsets.only(top: 30.0),
              child: Center(child:
              widget.photo  == null? Container() : Image.file(widget.photo, height: 350, width: 350,)
              ),
            ),
           
            Container(
              decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              color: Colors.lightBlue[400],
             ),
                margin: const EdgeInsets.all(20),
                child: FlatButton(
                    onPressed: () {
                    getHttp();
                  },
                            child: Center(
                              child: Row(
                                mainAxisAlignment: MainAxisAlignment.center,
                                children: <Widget>[
                                  Text(
                                    "Convert Image",
                                    style: TextStyle(
                                        color: Colors.white,
                                        fontWeight: FontWeight.w900,
                                        fontSize: 20.0
                                      ),
                                    textAlign: TextAlign.center,
                                  ),
                                  Padding(padding: const EdgeInsets.all(5)),
                                  
                                  Icon(Icons.autorenew, color: Colors.white)
                                  
                                ],
                              ), 
                            )
                          ),
                         height: 60
                      ),
                      Padding(
                       padding: const EdgeInsets.all(8.0),
                  ),

                Container(
                  child: Center(
                      child:readText!=null?Text(readText):Text(''),
                  ),
                )
              ],
            ),
          )
        );
      }

      Future getHttp() async {

        Dio dio = new Dio();
         var formData = FormData.fromMap({

              "image": await MultipartFile.fromFile(widget.photo.path,filename: "upload.txt"),
           }
          );
          try{
            var response = await dio.post("http://10.0.2.2:8000/upload", data: formData); 
            print(response);
            setState(() {
              readText=response.data.toString();
             }
            );
          }catch (e){
            print(e);
          }
      }
}

