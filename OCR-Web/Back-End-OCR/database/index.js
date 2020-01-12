exports.index = function(req, res){
    message = '';
   if(req.method == "POST"){
      var post  = req.body;
      var ImageName= post.user_name;
      var Characters= post.password;
   }
}