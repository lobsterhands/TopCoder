/*
    * Programmer:   lobsterhands
    * Start Date:   Oct 6, 2015
    * Last Change:  Oct 7, 2015
*/

/*

    Problem Statement:
        A sequence of numbers is called a zig-zag sequence if the differences between successive numbers strictly
        alternate between positive and negative. The first difference (if one exists) may be either positive or negative.
        A sequence with fewer than two elements is trivially a zig-zag sequence.

        For example, 1,7,4,9,2,5 is a zig-zag sequence because the differences (6,-3,5,-7,3) are alternately positive
        and negative. In contrast, 1,4,7,2,5 and 1,7,4,5,5 are not zig-zag sequences, the first because its first two
        differences are positive and the second because its last difference is zero.

        Given a sequence of integers, sequence, return the length of the longest sub-sequence of sequence that is a
        zig-zag sequence. A sub-sequence is obtained by deleting some number of elements (possibly zero) from the
        original sequence, leaving the remaining elements in their original order.

*/

//seq = [1, 0, 6, 5, 8, 9 ,1, 2, 4, 6];
//var seq = [1, 7, 4, 9, 2, 5]; // expect 6
//var seq = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8] // expect 7
//var seq = [44]; // expect 1
//var seq = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // expect 2
//var seq = [70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32]; // expect 8
var seq = [374, 40, 854, 203, 203, 156, 362, 279, 812, 955,
    600, 947, 978, 46, 100, 953, 670, 862, 568, 188,
    67, 669, 810, 704, 52, 861, 49, 640, 370, 908,
    477, 245, 413, 109, 659, 401, 483, 308, 609, 120,
    249, 22, 176, 279, 23, 22, 617, 462, 459, 244]; // expect 36

function longestZigZag(sequence) {

    // New array for the sub-sequence
    var subSeqArray = [];
    var subSeqIndex = 0;

    // isPos boolean value is set after first comparison
    var isPos = undefined;
    var maxLength = 1;

    for (var i = 0; i < sequence.length; i++) {

        // If change is positive:
        if (sequence[i] - sequence[i+1] < 0) {
            if (isPos != true) {
                isPos = true;
                maxLength++;
                subSeqArray[subSeqIndex++] = sequence[i];
            }
        }

        // If change is negative
        if (sequence[i] - sequence[i+1] > 0) {
            if (isPos != false) {
                isPos = false;
                maxLength++;
                subSeqArray[subSeqIndex++] = sequence[i];
            }
        }

        // If change does not exist, ignore it
    }

    if (subSeqArray.length <= 0) {
        console.log('Original', sequence);
    } else {
        console.log('subSeqArray', subSeqArray);
    }

    return maxLength;
}

console.log('Max length: ', longestZigZag(seq));