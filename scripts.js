let trainedNet;

function encode(arg) {
  return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
  return data.map(d => {
    return {
      input: encode(d.input),
      output: d.output
    }
  })
}

function train(data) {
  let net = new brain.NeuralNetwork();
  net.train(processTrainingData(data));
  trainedNet = net.toFunction();
  console.log('Finished Training...');
};

function execute(input){
  let results = trainedNet(encode(input));
  let output;
  results.trump > results.kardashian ? output = 'Trump' : output ='Kardashian';
  return output;
}

train(trainingData);

console.log(execute("The Stock Market hit 25,000 yesterday. Jobs are at an all time record - and that is before we fix some of the worst trade deals and conditions ever seen by any government. It is all happening!"));
