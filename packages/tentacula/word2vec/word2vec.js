/**
 * CONFIG:
 */
MAX = 100;


var childProcess = Npm.require('child_process');
var path = Npm.require('path');

class Word2VectorClass {
    static word2vec(input, output, callback) {
        if (_.isString(input) === false || _.isString(output) === false) {
            throw new Meteor.Error(500, 'Parameter input and output have to be strings.');
        }
        var word2vecProcess = childProcess.spawn('word2vec', ['-train', input, '-output', output]);
        word2vecProcess.on('error', function () {
            throw new Meteor.Error(500, 'The word2vec did not execute. Are you sure you compiled it correctly?');
        });
        word2vecProcess.on('close', function (code) {
            if (typeof callback === 'function') {
                callback(code);
            }
        });
    }

    static word2phrase(input, output, callback) {


        if (typeof input !== 'string' || typeof output !== 'string') {
            throw new Meteor.Error('Parameter input and output have to be strings.');
        }

        var word2phraseProcess = spawn('word2phrase', ['-train', input, '-output', output]);

        word2phraseProcess.on('close', function (code) {
            if (typeof callback === 'function') {
                callback(code);
            }
        });
    }

    static loadModel() {
        var newModel =  new Model();
        return newModel;
    }

}

W2V = Word2VectorClass;