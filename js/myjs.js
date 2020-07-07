function displaycode(s1){
    var s1  = document.getElementById(s1);
    var dbu = document.getElementById('button');
    var dba = document.getElementById('Badge');
    var dal = document.getElementById('alert');
    var dsp = document.getElementById('spinner');

    var di = document.createElement('div');
    var hdr = document.createElement('h1');
    var spn = document.createElement('span');
    var img = document.createElement('img');
    img.style.width="100%";
    var btn = document.createElement("button");
    var b = document.createAttribute("class");
    var cl = document.createAttribute("class");
    var c = document.createAttribute("role");
    var d = document.createAttribute("src");

    if (s1.value == "alert") {
        dba.style.display="none";
        dbu.style.display="none";
        dsp.style.display="none";
        dal.style.display="block";
        
        b.value="alert alert-primary";
        c.value="alert";
        d.value="./images/alertcode.PNG";
        di.setAttributeNode(c);
        di.setAttributeNode(b);
        img.setAttributeNode(d);
        di.innerHTML="A simple primary alert—check it out!";
        dal.appendChild(di);
        dal.appendChild(img);
    }
    if (s1.value == "Badge") {
        dba.style.display="block";
        dbu.style.display="none";
        dsp.style.display="none";
        dal.style.display="none";
        b.value="badge badge-secondary";
        d.value="./images/badgecode.PNG";
        hdr.innerHTML="Example heading";
        spn.innerHTML="New";
        img.setAttributeNode(d);
        spn.setAttributeNode(b);
        dba.appendChild(hdr);
        dba.appendChild(img);
        hdr.appendChild(spn);
        }
    if(s1.value == "button"){
        dba.style.display="none";
        dbu.style.display="block";
        dsp.style.display="none";
        dal.style.display="none";
        d.value="./images/buttoncode.PNG";
        img.setAttributeNode(d);
        b.value="btn btn-success";
        btn.setAttributeNode(b);
        btn.innerHTML="success"
        dbu.appendChild(btn);
        dbu.appendChild(img);
        }
    if (s1.value == "spinner") {
        dba.style.display="none";
        dbu.style.display="none";
        dsp.style.display="block";
        dal.style.display="none";
        b.value="spinner-border text-primary";
        c.value="status";
        d.value="./images/spinnercode.PNG";
        di.setAttributeNode(c);
        di.setAttributeNode(b);
        img.setAttributeNode(d);
        cl.value="sr-only";
        spn.setAttributeNode(cl);
        spn.innerHTML="Loading...";
        di.appendChild(spn);
        dsp.appendChild(di);
        dsp.appendChild(img);
        }    
}