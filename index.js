// Your code here
function mapToNegativize(thing) {
    let r = []
    for (let i = 0; i < thing.length; i++ ) {
      r.push(-1 * thing[i])
    }
    return r
  }

  function mapToNoChange(thing) {
    let r = []
    for (let i = 0; i < thing.length; i++ ) {
      r.push(thing[i])
    }
    return r
  }

  function mapToDouble(thing) {
    let r = []
    for (let i = 0; i < thing.length; i++ ) {
      r.push(2 * thing[i])
    }
    return r
  }
  
  function mapToSquare(thing) {
    let r = []
    for (let i = 0; i < thing.length; i++ ) {
      r.push(thing[i] ** 2)
    }
    return r
  }
  
  function reduceToTotal(thing, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < thing.length; i++ ) {
      total = total + thing[i]
    }
    return total
  }

  function reduceToAllTrue(thing) {
    for (let i = 0; i < thing.length; i++ ) {
      if (!thing[i]) return false
    }
    return true
  }

  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }
  