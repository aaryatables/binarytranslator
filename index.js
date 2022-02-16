binarytotext () {
      var bin2textconvert, resulttext = '', thebinarylength
      this.aaa = this.text_value
      bintext = this.aaa.replace(/[^01]/g, '')
      binlength = bintext.length - (bintext.length % 8)
      for (var z = 0; z < binlength; z = z + 8) {
        textresult += String.fromCharCode(parseInt(bintext.substr(z, 8), 2))
        this.ans = textresult
      }
    },
    bintodec () {
      this.fa = parseInt(this.text_value)
      var cc = new BigNumber(parseInt(this.text_value, 2))
      if (isNaN(cc)) {
        this.btod = 'This number cannot be converted into Decimal'
      } else {
        this.btod = cc
      }
    },
    bintooct () {
      this.xxx = parseInt(this.text_value)
      var bintooct = parseInt(this.xxx, 2).toString(8)
      if (isNaN(bintooct)) {
        this.btoo = 'This number cannot be converted into Octal'
      } else {
        this.btoo = bintooct
      }
    },
    bintohex () {
      var binnn = this.text_value
      var mol = new BigNumber(binnn, 2)
      var binnx = mol.toString(16)
      if (isNaN(binnx)) {
        this.btoh = 'This number cannot be converted into Hex'
      } else {
        this.btoh = binnx
      }
    },
