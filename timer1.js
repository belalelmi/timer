
let args = process.argv.slice(2);
args.sort((a, b) => a - b);
let newargs = args.filter(x => x > 0);
// console.log(newargs);

for (const x of newargs) {
  if (newargs.length === 0) {
    break;
  } else {
    setTimeout(() => {
      process.stdout.write(x + ' seconds' + '\07\n');
    }, (x * 1000));
  }
}