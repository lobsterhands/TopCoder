//Class:	ZigZag
//Method:	longestZigZag
//Parameters:	int[]
//Returns:	int
//Method signature:	int longestZigZag(int[] sequence)
//(be sure your method is public)
//
//
//Constraints
//-	sequence contains between 1 and 50 elements, inclusive.
//-	Each element of sequence is between 1 and 1000, inclusive.
//
//    Examples
//0)
//
//{ 1, 7, 4, 9, 2, 5 }
//Returns: 6
//The entire sequence is a zig-zag sequence.
//1)
//
//{ 1, 17, 5, 10, 13, 15, 10, 5, 16, 8 }
//Returns: 7
//There are several subsequences that achieve this length. One is 1,17,10,13,10,16,8.
//2)
//
//{ 44 }
//Returns: 1
//3)
//
//{ 1, 2, 3, 4, 5, 6, 7, 8, 9 }
//Returns: 2
//4)
//
//{ 70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32 }
//Returns: 8
//5)
//
//{ 374, 40, 854, 203, 203, 156, 362, 279, 812, 955,
//    600, 947, 978, 46, 100, 953, 670, 862, 568, 188,
//    67, 669, 810, 704, 52, 861, 49, 640, 370, 908,
//    477, 245, 413, 109, 659, 401, 483, 308, 609, 120,
//    249, 22, 176, 279, 23, 22, 617, 462, 459, 244 }
//Returns: 36

//seq = [1, 0, 6, 5, 8, 9 ,1, 2, 4, 6];
//var seq = [1, 7, 4, 9, 2, 5]; // expect 6
//var seq = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8] // expect 7
//var seq = [44]; // expect 1
//var seq = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // expect 2
var seq = [70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32]; // expect 8
//var seq = [374, 40, 854, 203, 203, 156, 362, 279, 812, 955,
//    600, 947, 978, 46, 100, 953, 670, 862, 568, 188,
//    67, 669, 810, 704, 52, 861, 49, 640, 370, 908,
//    477, 245, 413, 109, 659, 401, 483, 308, 609, 120,
//    249, 22, 176, 279, 23, 22, 617, 462, 459, 244]; // expect 36

function longestZigZag(sequence) {
    //var subA = [];
    //var subAIndex = 0;
    //var subSeq = "";

    // New array for the sub-sequence
    var subSeqArray = [];
    var subSeqIndex = 0;

    var isPos = undefined;
    var maxLength = 1;

    for (var i = 0; i < sequence.length; i++) {

        if (sequence[i] - sequence[i+1] < 0) {
            //console.log("P");
            if (isPos != true) {
                isPos = true;
                //subSeq += '+';
                maxLength++;
                subSeqArray[subSeqIndex++] = sequence[i];
            } else {
                //subA[subAIndex] = subSeq;
                //subSeq = "";
                //subAIndex++;
            }
        } else if (sequence[i] - sequence[i+1] > 0) {
            //console.log("N");
            if (isPos != false) {
                isPos = false;
                //subSeq += '-';
                maxLength++;
                subSeqArray[subSeqIndex++] = sequence[i];
            } else {
                //subA[subAIndex] = subSeq;
                //subSeq = "";
                //subAIndex++;
            }
        } else {
            //console.log("E: ignore");
        }

    }

    //console.log('subA', subA);
    //console.log('subAIndex', subAIndex);
    //console.log('subSeq', subSeq);
    //console.log('isPos', isPos);
    //console.log('maxLength', maxLength);
    if (subSeqArray.length <= 0) {
        console.log('Original', sequence);
    } else {
        console.log('subSeqArray', subSeqArray);
    }

    return maxLength;
}

console.log('Max length: ', longestZigZag(seq));