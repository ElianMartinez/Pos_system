#include <iostream>

using namespace std;

int  main(int argc, const char** argv) {
   
   int x,suma = 0;
   for(x= 1; x<= 100; x++){
       if(x%2 != 0) suma+=x;
      // cout << x;
       cout << suma;
       cout << " ";
   }

}