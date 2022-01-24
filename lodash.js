//1.concat

// var a=[2,3,4,6]

// var b=[5,6,7,8]



// j=a.length

// for(let i=0;i<b.length;i++){

// a[j]=b[i]

// j++

// }

// console.log(a)



// ***********************************************************************



//2.pull

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];

// var k=[]

// for(let i=0;i<array.length;i++){

// if(array[i]=='a'&&array[i+2]=='c')

// k.push(array[i+1])

// }



// console.log(k)



//lodash pull

// var array = ['a', 'b', 'c', 'a', 'b', 'c'];

// _.pullAll(array, ['a', 'c']);

// console.log(array);



// ***********************************************************************



// 3 camelCase



// var a = "game name is over";

// var b=a.split(' ')

// for(let i=1;i<b.length;i++){

// k=b[i].split('')

// k[0]=k[0].toUpperCase();

// b[i]=k.join('')

// }

// console.log(b.join(''))



// ***********************************************************************

//4.take

// _.take([1, 2, 3]);

// // => [1]

// _.take([1, 2, 3], 2);

// // => [1, 2]

// _.take([1, 2, 3], 5);

// // => [1, 2, 3]

// _.take([1, 2, 3], 0);



// var a=[1,2,3,4]

// n=0

// p=[]

// for(let i=0;i<n;i++){

// p.push(a[i])

// }

// console.log(p)



// ***********************************************************************



// 5.