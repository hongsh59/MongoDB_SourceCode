db.users.find({name :{$regex:"k"},email :{$exists:true}});