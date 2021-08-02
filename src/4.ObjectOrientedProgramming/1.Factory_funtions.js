// factory function make/create
function createElf(name, weapon) {
    //we can also have closures here to hide properties from being changed.
    return {
      name: name,
      weapon: weapon,
      atack() {
        return 'atack with ' + weapon
      }
    }
  }
  const sam = createElf('Sam', 'bow');
  const peter = createElf('Peter', 'bow');
  
  sam.atack()