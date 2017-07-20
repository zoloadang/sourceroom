一元操作符
递增递减操作符
1.递增和递减操作符操作数为包含有效数字的字符串时会被转换为数字值，再进行加减1操作。
parseInt("123");//123
parseInt("0123");//123
parseInt("0x123");//291
parseInt("0x123tt");//291
2.当字符串不包含有效字符时，将字符串转换为NaN。
parseInt("0xtt");//NaN
parseInt("tt");//NaN
3.当操作数为布尔值false时，将其转换为0再执行加减1。
4.当操作数为布尔值true时，将其转换为1再执行加减1。
var a=true;
a--;//1
a;//0
5.当操作数为浮点数时，执行加减1操作。
6.当操作数为对象时，先调用对象的valueOf方法以取得一个可供操作的值。
obj.valueOf();//Object {}或自定义的valueof函数返回值
arr.valueOf();//[1,2,3]
func.valueOf();//function func(...){...}
一元加减操作符
对非数值应用一元加操作符时，操作符会使用Number()转型函数对这个值执行转换。
Number(true);//1
Number(false);//0
Number({});//NaN
Number([]);//0,调用array的toString方法
Number(function(){});//NaN


位操作符
1.NOT ~ 按位非
2.AND & 按位与
3.OR  | 按位或
4.XOR ^ 按位异或
5.<< 左移
6.>> 有符号右移 保留符号位，以符号位的值空位
0000 0000 0000 0000 0000 0000 0100 0000 64
0000 0000 0000 0000 0000 0000 0000 0100 64>>4
7.>>>无符号右移 均以0填充空位
0000 0000 0000 0000 0000 0000 0100 0000 64
1111 1111 1111 1111 1111 1111 1100 0000 -64
0000 1111 1111 1111 1111 1111 1111 1100 -64>>>4

布尔操作符
1.! 逻辑非
如果操作数是一个对象、非空字符串、非0数值（包括infinity）返回false。
如果操作数是空字符串、0、null、undefined、NaN返回true。
2.&& 逻辑与
如果第一个操作数是一个对象，则返回第二个操作数。
如果第二操作数是对象，则只有第一个操作数的求职结果为true时才返回该对象
如果两个操作数都是对象则返回第二个操作数。
如果有一个操作数为null则返回null。
如果有一个操作数为NaN则返回NaN。
如果有一个操作数为undefined则返回undefined。
3.|| 逻辑或
如果第一个操作数是对象，则返回第一个操作数。
若果第一个操作数的求值结果为false则返回第二个操作数。
如果两个操作都是对象，则返回第一个操作数。
若果两个操作数都是null，则返回null。
如果两个操作数都是NaN，则返回NaN。
如果两个操作数都是undefined，则返回undefined。

乘性操作符
1.乘法
如果两个操作数都是数值，执行常规的乘法计算。
如果一个操作数是NaN，则结果为NaN
如果Infinity与0相乘，结果为NaN
如果Infinity与非0数值相乘，则结果为Infinity或者-Infinity
如果infinity与infinity相乘，则结果为infinity
如果有一个操作数不是数值，则在后台调用Number()将其转换为数值。
2.除法
如果操作数都是数值，则执行常规的除法计算。
如果有一个操作数是NaN，则结果为NaN
如果Infinity被infinity除，则结果为NaN
如果0被0除，结果为NaN
如果非零有限数被0除，则结果为infinity或者-infinity
如果infinity被任何非0数值除，则结果为infinity或-infinity。
如果有一个操作数部位数值，则在后台调用Number()将其转换为数值。
3.求模
如果两个操作数都是数值，执行常规的除法计算，返回取得的余数。
如果被除数是无穷大值而除数是有限大的数值，则返回NaN
如果被除数是有限大的数值而除数是0，怎结果为NaN
如果Infinity被infinity除，则结果为NaN
如果被除数是有限大的数值而除数是无穷大的数值，则结果为被除数。
如果被除数是0，则结果为0
如果有一个操作数不是数值，则在后台调用Number转换为数值再进行计算。

加性操作符
1.加法
如果有一个操作数为NaN，则结果为NaN
如果是Infinity加Infinity，则结果为Infinity
如果是-Infinity加-Infinity，结果为-Infinity
如果Infinity加-Infinity，结果为NaN
+0加+0，结果为+0
-0加-0，结果为-0
+0加-0，结果为+0
如果两个操作符都是字符串则将第二个操作数与第一个操作数拼接起来
如果只有一个操作数是字符串则将另一个操作数转换为字符串，然后再将两个字符串拼接起来。
2.减法
如果两个操作数都是数值，则执行常规的算术减法操作并返回结果。
如果有一个操作数是NaN，则结果为NaN
如果是Infinity减Infinity，则结果是NaN
如果是-Infinity减-Infinity，则结果是NaN
如果是-Infinity减-Infinity，则结果是NaN
如果是Infinity减-Infinity，则结果为Infinity
如果是-Infinity减Infinity，则结果为Infinity
如果是+0减+0，则结果为+0
如果是-0减-0，则结果为+0
如果有一个操作数是字符串、布尔值、null或undefined则现在后台调用Number()函数将其转换为数值。
Number(true);//1
Number(null);//0
Number(undefined);//NaN
Number("0x23");//35
Number("0234");//234
Number("0234eee");//NaN
如果有一个操作数为对象，则调用对象的valueof方法以取得表示该对象的数值。

关系操作符
< > <= >=
如果两个操作数都是数值，则执行数值比较
如果两个操作数都是字符串，则比较两个字符串对应的字符编码值
如果一个操作数是数值，则将另一个操作数转换为一个数值再进行比较
如果一个操作时是对象，则调用这个对象的valueof方法用得到的结果按照前面的规则执行比较。
如果一个操作数是布尔值，则先将其转换为数值，然后再执行比较。

相等操作符
1.相等和不相等
如果有一个操作数为布尔值，则在比较相等性之前先将其转换为数值。
如果一个操作数为字符串，另一个是数字，则将字符串转换为字符串
如果一个操作数是对象，另一个操作数不是，则调用对象的valueof方法，用得到的基本类型值按照前面的规则进行比较。
NaN和任何操作数相比值均为false，包括自身。
两个对象相比较，除非是同一个对象否则不相等。
null==undefined;//true
NaN==NaN;//false
NaN==NaN;//false
NaN!=NaN;//true
false==0;//true
true==1;//true
undefined==0;//false
null==0;//false
"5"==5;//true
2.全等和不全等
两个操作数未经转换就相等的情况下返回true。

条件操作符
variable = boolean_expression ? true_value : false_value;

赋值操作符
= 右侧的值赋给左侧的值
*= = %= += -= <<= >>= >>>=

逗号操作符
在一条语句中执行多个操作
var num=(1,3,5,8,9);//num为0