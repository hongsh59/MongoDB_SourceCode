db.catalog.find({"price" : {"$gte":10000, "reviews.rating":{"$gte":5 }});