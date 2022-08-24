var Reverse_Number = (N) => 
{
// return N.toString().split('').reverse().join('')
let reverse=0,remainder
while(N!==0)
{
    remainder = N % 10;
    reverse = reverse * 10 + remainder;
    N=parseInt(N/10);
}
return reverse
};
