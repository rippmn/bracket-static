function RPSNode(entryNum) {


                if (entryNum == 1) {
                    this.level = 0;
                    this.insertValue = 1;
                } else {
                    var parent = new RPSNode(Math.floor(entryNum / 2));
                    this.level = parent.level + 1;
                    this.insertValue = parent.insertValue + (Math.pow(2, this.level - 1) * (entryNum % 2));
                }
                this.entryNum = entryNum;


            }

            function getValue() {

                entry = parseInt(document.getElementById("input").value);
                document.getElementById("input").value = "";

                if (entry < 1) {
                    throw console.error("cannot do anything unless value is >0");
                }

                rps = new RPSNode(entry + 255);

                var table = document.getElementById("entryTable")

                if (table.rows.length > 1) {
                    table.deleteRow(1)
                }

                var tr = table.insertRow(1)
                var nodeBoardPos = getBoardPosition(rps.insertValue)
                tr.insertCell(0).innerHTML = rps.entryNum - 255
                tr.insertCell(1).innerHTML = rps.insertValue
                tr.insertCell(2).innerHTML = nodeBoardPos.board
                tr.insertCell(3).innerHTML = nodeBoardPos.position



            }

            function loadTable() {
                var table = document.getElementById("theTable")
                for (let index = 0; index < 256; index++) {
                    var rpsNode = new RPSNode(index + 256);
                    var tr = table.insertRow(index + 1)
                    var nodeBoardPos = getBoardPosition(rpsNode.insertValue)
                    tr.insertCell(0).innerHTML = rpsNode.entryNum - 255
                    tr.insertCell(1).innerHTML = rpsNode.insertValue
                    tr.insertCell(2).innerHTML = nodeBoardPos.board
                    tr.insertCell(3).innerHTML = nodeBoardPos.position

                }
            }

            function getBoardPosition(nodePosition) {
                return { board: (Math.floor(nodePosition / 64)) + 1, position: ((nodePosition % 64)) }
            }