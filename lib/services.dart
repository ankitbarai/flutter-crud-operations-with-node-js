import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class API{
  static const baseUrl = "";

static addProduct(Map pdata) async {

  try {

    final res = await http.post(Uri.parse(""), body:pdata);

    if (res.statusCode == 200) {
      //
    }else{
      //
    }
    
  } catch (e) {
    debugPrint(e.toString());
    
  }

}

}