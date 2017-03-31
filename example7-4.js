db.orders.aggregate([{$group:
                  { _id:
                    {"apple" : "a",
                     "banana" : "b",
                     "pear" : "c",
                    }    }    }  ]  )  