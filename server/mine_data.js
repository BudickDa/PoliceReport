Tags = [
    {
        name: 'Einbruch',
        keywords: [
            'Einbruch', 'Einbrecher'
        ]
    },
    {
        name: 'Diebstahl',
        keywords: [
            'Gestohlen','Diebstahl','Stehlen'
        ]
    }
];



Meteor.methods({
    tagData: function () {
        Reports.find().forEach((doc)=> {
            Reports.update(doc._id, {$set: {processed: 'In Progress'}});
            var tags = Tentacula.tagText(doc.headline, doc.text, Tags);
            Reports.update(doc._id, {$push: {tags: tags}});
            Reports.update(doc._id, {$set: {processed: 'Tagged'}});
        });
    }
})
