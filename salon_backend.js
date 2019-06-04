/*This sets up the client object*/
/**Client has a first name and a last name */
/**Client has a phone number */
/**Client has can have multiple formulas */
/**Client also has notes attached to them */
function client(name1, name2, phoneNum) {
    this.firstName = name1,
    this.lastName = name2,
    this.clientPhone = phoneNum,
    this.formulaArray = new Array(),
    this.commentArray = new Array(),

    /**This function allows the user to add a formula to the customer's formula array */
    /**This function takes in the formula iteslf as its argument */
    this.addFormula = function(givenFormula) {
        this.formulaArray.push(givenFormula);
    }

    /**This function allows the user to add a comment to the customer's comment array */
    /**This function takes in the comment itself as its argument */
    this.addComment = function(givenComment) {
        this.commentArray.push(givenComment);
    }
};

