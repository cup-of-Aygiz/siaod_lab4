import Stack from "../Classes/Stack.js";


export const transfer_disk = (a, b) => {
    if (b.isEmpty() === true) {
        b.pushFront(a.peekFront());
        a.popFront();
        return 1;
    } else if (a.isEmpty() === true) {
        a.pushFront(b.peekFront());
        b.popFront();
        return 2;
    } else {
        if (b.peekFront() > a.peekFront()) {
            b.pushFront(a.peekFront());
            a.popFront();
            return 1;
        } else {
            a.pushFront(b.peekFront());
            b.popFront();
            return 2;
        }
    }
}
export const han = (kol) => {
    let s = new Stack()
    let a = new Stack()
    let d = new Stack()
    let n = kol
    for (let i = n; i >= 1; i--) {
        s.pushFront(i);
    }

    let x = Math.pow(2, n) - 1
    let i = 1

    if (n % 2 === 0) {
        while (i <= x) {
            if (i % 3 === 1) {
                let y = transfer_disk(s, a)
                if (y === 1) {
                    console.log("Переместить диск " + a.peekFront() + " с StackA на StackB")
                } else
                    console.log("Переместить диск " + s.peekFront() + " с StackB на StackA")
            } else if (i % 3 === 2) {
                let y = transfer_disk(s, d)
                if (y === 1) {
                    console.log("Переместить диск " + d.peekFront() + " с StackA на StackC")
                } else
                    console.log("Переместить диск " + s.peekFront() + " с StackC на StackA")
            } else {
                let y = transfer_disk(a, d)
                if (y === 1) {
                    console.log("Переместить диск " + d.peekFront() + " с StackB на StackC")
                } else
                    console.log("Переместить диск " + a.peekFront() + " с StackC на StackB")
            }
            i++
        }
    } else {
        while (i <= x) {
            if (i % 3 === 1) {
                let y = transfer_disk(s, d);
                if (y === 1) {
                    console.log("Переместить диск " + d.peekFront() + " с StackA на StackC")
                } else
                    console.log("Переместить диск " + s.peekFront() + " с StackC на StackA")
            } else if (i % 3 === 2) {
                let y = transfer_disk(s, a);
                if (y === 1) {
                    console.log("Переместить диск " + a.peekFront() + " с StackA на StackB")
                } else
                    console.log("Переместить диск " + s.peekFront() + " с StackB на StackA")
            } else {
                let y = transfer_disk(a, d);
                if (y === 1) {
                    console.log("Переместить диск " + d.peekFront() + " с StackB на StackC")
                } else
                    console.log("Переместить диск " + a.peekFront() + " с StackC на StackB")
            }
            i++;
        }
    }
    // while (d.isEmpty() !== true) {
    //     console.log(d.peekFront());
    //     d.popFront();
    // }
    return 0;
}