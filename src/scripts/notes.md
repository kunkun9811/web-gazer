## Notes for some minor changes for the convertion from JS to Python

### Line 42

I do not have the "if condition"

### Line 195

I might have to pass in "document.documentElement.clientWidth & clientHeight" to the server

### Line 107

Perform Deepcopy to avoid modifying this.vxBuffer & vyBuffer

### Line 163

If-statements around line 163 ~ 171 is check if the samples['saccades']['_data'](which is an array of true & false) are all FALSES (meaning they are all fixations) or all TRUES (meaning they are all saccades)

### Line 208

minusOnes = the INDEXES of minus ones in sacc_event
plusOnes = the INDEXES of plus ones in sacc_event

OG coder's explanation seems to be reversed. It should be
minusOnes = start of fixation, end of saccades
plusOnes = start of sacc, end of fixation

# LOOK AT the ipynb file bottom most to see what to do next
