module.exports = class {
    constructor(number, color) {
        this.number = number;
        this.color = color;
    }
    toString() {
        let number = this.number;
        let color = this.color;
        let str = "---";
        //牌面 A 2 3 4 5 6 7 8 9 10 J Q K joker JOLER
        if (number == 1) {
            str = "A"
        } else if (number > 1 && number <= 10) {
            str = number;
        } else if (number == 11) {
            str = "J"
        } else if (number == 12) {
            str = "Q"
        } else if (number == 13) {
            str = "K"
        } else if (number == 14) {
            str = "<====joker";
            return str;
        } else if (number == 15) {
            str = "<====JOKER"
            return str;
        }
        //花色 1♥ 2 ■ 3♣ 4 ♠
        if (color == 1) {
            str += " 《-红桃-》  ♥";
        } else if (color == 2) {
            str += " 《-方块-》  ■";
        } else if (color == 3) {
            str += " 《-梅花-》  ♣";
        } else if (color == 4) {
            str += " 《-黑桃-》  ♠";
        }
        return str;
    }
}