(function(window){
    let sort = {};
    sort.kilkUnd = 0;

    sort.obmin = function(arr1, isIncrease = true){
        let arr = [...arr1];
        arr = sort.newArr(arr);
        let compar = 0;
        let swaps = 0;

        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                compar++;
                if((arr[i]>arr[j+1]&&isIncrease)||(arr[j] < arr[j + 1] && !isIncrease)){
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swaps++;
                }
            }
        }

        console.log(`Метод вибору(бульбашковий): порівняння - ${compar}, обмін - ${swaps}\n---------------------`);
        sort.addUnd(arr,isIncrease);
        return arr;
    }

    sort.minElement =function(arr1, isIncrease = true){
        let arr = [...arr1];
        arr = sort.newArr(arr);
        let compar = 0;
        let swaps = 0;

        for (let i = 0; i < arr.length; i++) {
            let minIndex = i;
      
            for (let j = i + 1; j < arr.length; j++) {
              compar++;
              if ((arr[j] < arr[minIndex] && isIncrease) || (arr[j] > arr[minIndex] && !isIncrease)) {
                minIndex = j;
              }
            }
      
            if (minIndex !== i) {
              let temp = arr[i];
              arr[i] = arr[minIndex];
              arr[minIndex] = temp;
              swaps++;
            }
        }

        console.log(`Метод мінімального елемента(вибірковий): порівняння - ${compar}, обмін - ${swaps}\n---------------------`);
        sort.addUnd(arr,isIncrease);
        return arr;
    }

    sort.vstavka =function(arr1, isIncrease = true){
        let arr = [...arr1];
        arr = sort.newArr(arr);
        let compar = 0;
        let moves = 0;

        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
      
            while (j >= 0 && (arr[j] > current && isIncrease || arr[j] < current && !isIncrease)) {
              compar++;
              arr[j + 1] = arr[j];
              j--;
              moves++;
            }
      
            arr[j + 1] = current;
          }

        console.log(`Метод вставки: порівняння - ${compar}, переміщення - ${moves}\n---------------------`);
        sort.addUnd(arr,isIncrease);
        return arr;
    }

    sort.shell =function(arr1, isIncrease = true){
        let arr = [...arr1];
        arr = sort.newArr(arr);
        let compar = 0;
        let swaps = 0;

        let gap = Math.floor(arr.length / 2);

        while (gap > 0) {
            for (let i = gap; i < arr.length; i++) {
                let temp = arr[i];
                let j = i;

                while (j >= gap && (isIncrease ? arr[j - gap] > temp : arr[j - gap] < temp)) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                    swaps++;
                    compar++;
                }

                arr[j] = temp;
            }

            gap = Math.floor(gap / 2);
        }


        console.log(`Метод Шелла: порівняння - ${compar}, обмін - ${swaps}\n---------------------`);
        sort.addUnd(arr,isIncrease);
        return arr;
    }

    sort.hoar = function(arr1, isIncrease = true){
        let arr = [...arr1];
        arr = sort.newArr(arr);
        let compar = 0;
        let swaps = 0;

        function partition(arr, low, high) {
            let pivot = arr[Math.floor((low + high) / 2)];
            let i = low - 1;
            let j = high + 1;

            while (true) {
                do {
                    i++;
                    compar++;
                } while (isIncrease ? arr[i] < pivot : arr[i] > pivot);

                do {
                    j--;
                    compar++;
                } while (isIncrease ? arr[j] > pivot : arr[j] < pivot);

                if (i >= j) return j;

                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                swaps++;
            }
        }

        function sorting(arr, low, high) {
            if (low < high) {
                let pivotIndex = partition(arr, low, high);
                sorting(arr, low, pivotIndex);
                sorting(arr, pivotIndex + 1, high);
            }
        }

        sorting(arr, 0, arr.length - 1);


        console.log(`Метод Хоара(швидке сортування): порівняння - ${compar}, обмін - ${swaps}\n---------------------`);
        sort.addUnd(arr,isIncrease);
        return arr;
    }

    sort.isSparsed = function (arr){
        for(let i = 0; i< arr.length; i++){
            if(arr[i]==undefined){
                console.log("Масив містить undefined елементи!");
                return true;
            }
        }
        console.log("Масив не містить undefined елементів!");
        return false;
    }

    sort.newArr = function(arr){
        sort.kilkUnd = 0;
        if(sort.isSparsed(arr)){
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === undefined) {
                  arr.splice(i,1);
                  sort.kilkUnd++;
                  i--;
                }
              }
        }
        console.log(sort.kilkUnd);
        return arr;
    }

    sort.addUnd = function(arr, isIncrease){
        for(let i = 0; i<sort.kilkUnd;i++){
            if(isIncrease){
                arr.unshift(undefined);
            }else arr.push(undefined);
        }
        return arr;
    }

    window.sort = sort;
})(window);