const range = document.getElementById("range")

range.addEventListener("input", (e)=>{
    const {target:{value:myvalue=0}} = e
    const {target:{nextElementSibling:next=0}} = e
    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')

    const labelWidth = getComputedStyle(next).getPropertyValue('width')

    const numbRangeIWdth = +rangeWidth.substring(0, rangeWidth.length - 2)

    const numbLabelIWdth = +labelWidth.substring(0, labelWidth.length - 2)

    const max = e.target.max
    const min = e.target.min

    const left = myvalue * (numbRangeIWdth / max) - numbLabelIWdth / 2 + scale(myvalue, min, max, 10, -10)

    next.style.left = `${left}px`

    console.log(left)
    
    next.innerHTML = myvalue
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }