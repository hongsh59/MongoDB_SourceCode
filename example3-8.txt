db.diary.update(
       { dates: '12' },
       {
        $set: { dates: '14' },       
        $currentDate: { lastModified: true }
       },
        { multi : true }
)