# The-solar-labs-Assignment
# Frontend Engineer 

Make a card having 3 checkboxes. Each checkbox will represent a year. So basically lets
assume 3 years ex- 2021, 2022, 2023. Now, each year will have a separate card visible. So
initially as all the checkboxes are unticked, then we will not be displaying any YEAR Card.
Now we have selected the 1st checkbox labeled 2021, So now a separate card will be visible
just below the card having all the checkboxes. Similarly if you select the 2nd or 3rd card, it will
be visible consecutively. So if we tick all the checkboxes, we will see 3 YEAR Cards.
Now inside each YEAR Card, at the top we will be having a dropdown where will show 3
options

● Jan - Apr

● May - Aug

● Sep - Dec


Initially no option in drop down will be selected. Now as you will select any option, 4 input
boxes will appear just below the dropdown and names of the input boxes will be labeled as
selected in the selected option from dropdown. Ex - if chosen Jan - Apr, you will display 4
inputs named as - Jan, Feb, Mar, Apr. Similarly for other options in the dropdown. So whatever
options you select from the dropdown , there will be 4 inputs for each YEAR Card. You can
change that selected option any number of times and corresponding to that, inputs and their
labeling should also be changed.

All the 4 inputs will be having type=”number” and they will be initialized by 0. Now, as soon as
you start entering values in any one of the inputs, all the remaining 3 inputs for that card will be
disabled by itself. So basically The Condition is when all the 4 inputs are having 0 as value,
then as soon as we start entering value in any one the input will disable the other 3 inputs .
There is a button in the bottom right of the YEAR Card namely “Calculate”. As you click on this
calculate button, all the remaining 3 buttons will be filled with some values near to the already
entered value. The maximum absolute difference between the entered value and the
calculated value should be 100. Any values can be generated but the max absolute difference
between these values and the originally entered value should be 100. Make sure that it is a
random and not the same as the originally entered value. There will be a reset Button in the
top right corner of the card as well.

Now as we click on the Calculate button, we will see all the 4 inputs having some values .
And now we should be able to change the values . So no need to disable any input in this
case.

Now after we click on Reset button, all the values should be reset to 0. And now if we start
entering a value in any of the input button, the remaining input should be disabled.
So basically if all the values are 0, then we must allow the user to enter only 1 input and then
calculate. But after the calculation is done, definitely all the inputs will not be zero at the same
time so they can change any values without disabling any inputs.


#Created with CodeSandbox
