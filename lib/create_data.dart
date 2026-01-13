import 'package:flutter/material.dart';

class CreateProduct extends StatefulWidget {
  const CreateProduct({super.key});

  @override
  State<CreateProduct> createState() => _CreateProductState();
}

class _CreateProductState extends State<CreateProduct> {

  var nameController = TextEditingController();
  var priceController = TextEditingController();
  var descriptionController = TextEditingController();



  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Create operation'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          TextField(
            controller: nameController,
            decoration: const InputDecoration(
              hintText: "Name",
            ),
          ),
          TextField(
            controller: priceController,
            decoration: const InputDecoration(
              hintText: "Price",
            ),
          ),
          TextField(
            controller: descriptionController,
            decoration: const InputDecoration(
              hintText: "Description",
            ),
          ),
          SizedBox(height: 30,),
          ElevatedButton(onPressed: (){}, 
          child: Text('Create Product')),
        ],
      ),
    );
  }
}