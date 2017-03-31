db.diary.find(
{
     type: 'date',
     $or: [ { event: { $lt: 2 } }, { price: { $gt: 3 } } ]
   }
)