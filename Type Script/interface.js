var Students = /** @class */ (function () {
    function Students(p, c, m) {
        this.phy = p;
        this.che = c;
        this.math = m;
    }
    Students.prototype.totalMarks = function () {
        return this.total = this.phy + this.che + this.math;
    };
    Students.prototype.percentage = function () {
        return (this.total / 300) * 100;
    };
    Students.prototype.StudentsResults = function () {
        console.log("Physics:".concat(this.phy, ", Chemistry:").concat(this.che, ", Math:").concat(this.math, " Total:").concat(this.totalMarks(), ", Percentage:").concat(this.percentage()));
    };
    return Students;
}());
var stdObj = new Students(95, 92, 99);
stdObj.StudentsResults();
