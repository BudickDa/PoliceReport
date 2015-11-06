tags = [
    {
        tag: 'Einbruch',
        keywords: [
            'Einbruch', 'Einbrecher', 'Einbrüche'
        ]
    },
    {
        tag: 'Diebstahl',
        keywords: [
            'gestohlener', 'gestohlene', 'Gestohlener', 'Gestohlene', 'Diebstahl', 'Dieb', 'Diebe'
        ]
    }
];


tagData = function () {
    Reports.find().forEach((doc)=> {
        var found;
        Reports.update(doc._id, {$set: {processed: 'In Progress'}});
        tags.forEach((tagObject)=> {
            found = false;
            tagObject.keywords.forEach((keyword)=> {
                    if (found) {
                        return;
                    }
                    if (doc.headline.includes(keyword)) {
                        found = true;
                    } else if (doc.text.includes(keyword)) {
                        found = true;
                    }
                    if (found) {
                        Reports.update(doc._id, {$push: {tags: tagObject.tag}});
                    }
                }
            );
        });
        Reports.update(doc._id, {$set: {processed: 'Tagged'}});
    });
}