
context('Bulletproof testing', () => {
 beforeEach(() => {
    cy.visit('http://www.bk.rw')
  })

  //Checking sections of services.
  it('Testing 4 sections of Service ',()=>{

	cy.get(':nth-child(1) > .serviceBox > .title')
	.should('contain','Open account')
	.click()

	cy.get(':nth-child(2) > .serviceBox > .title')
	.should('contain','Get a loan')
	.click()

	cy.get(':nth-child(3) > .serviceBox > .title')
	.should('contain','Get a Mortgage')
	.click()

	cy.get(':nth-child(4) > .serviceBox > .title')
	.should('contain','Card Center')
	.click()

   })

  //Testing if Sell price > Buying price and Buying price > 800
  it("Testing Selling Price > Buy Price",()=>{
  	 exchangeRateComparison()
  })

  //Testing personal current link
  it('Testing personal account link',()=>{

  	cy.get(':nth-child(1) > .serviceBox > .shortcut-url > :nth-child(1) > a')
  	.should('contain','Personal Current')
  	.click({force:true})

  })
  //Testing joint account link
  it('Testing joint account link',()=>{
  	
  	cy.get(':nth-child(1) > .serviceBox > .shortcut-url > :nth-child(2) > a')
  	.should('contain','Joint Account')
  	.click({force:true})

  })
  //Top navigation testing current & saving link
  it('Testing if navigation contains Current & saving link',()=>{

  	cy.get('.navbar-collapse > .navbar-nav > .menu-large > a')
  	.contains('Current & Saving')
  	.click({force:true})

  })

 //testing the link of online banking
 it('Online Banking link testing',()=>{

 	cy.get('.megamenu > :nth-child(2) > ul > :nth-child(2) > a')
  	.contains('Online Banking')
  	.should('have.attr','href','https://www.bk.rw/ways-of-banking/online-banking')
  	.click({force:true})

  	cy.get(':nth-child(2) > .pb-access-box > :nth-child(4) > a')
  	.should('contain','Apply Now')
  	.click({force:true})

 })
  
}) 
//exchange rate comparison function
function exchangeRateComparison(){
  //getting buying price in USD rate
  cy.get('tbody > :nth-child(2) > :nth-child(2)').then(($buy_price)=>{
  	//getting selling price in USD rate
  	 cy.get('tbody > :nth-child(2) > :nth-child(3)').then(($selling_price)=>{
  	 	var buy_price     = $buy_price.text()
  	 	var selling_price = $selling_price.text()
  	 	//Comparing Selling price > Buying price
  	 	expect(selling_price).to.be.greaterThan(buy_price)
  	 	expect(buy_price).to.be.greaterThan(800)
  	 })
  })
}