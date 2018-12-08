#AISHA Program Code - Created by Angus Davidson
#Version 1.0

#Device Specs
#Resolution of raspberry pi display - 800x600
#7 inch display

#HEX Colours
#Grey-707072
#Blue-869EE2
#Black-000000

#Below are all the modules for importing
import tkinter as tk #tkinter used for visualization
from tkinter import *
from tkinter import ttk
from PIL import Image, ImageDraw, ImageFont
#import Page2

width=800 #width of display in pixeld
height=600 #height of display in pixels 
center=400 #center of page - half of width in pixels 

#button dimensions
bw=10 #button width in pixels
bh=1 #button height pixels 

class HomePage_GUI(): #class for multiple functions
    def __init__(self,master): #main function for GUI
        self.master=master
        self.master.configure(bg='#ffffff') #HEX code for background colour
        self.master.option_add('*Font','Georgin 18') #Button font style
        self.master.option_add('Background','#ffffff') #GUI Background Colour
        self.master.geometry('800x600') #resolution of GUI window
        
        #AISHA Logo
        self.AISHALogo = ttk.Frame(master)
        self.AISHALogo.pack()
        self.logo=PhotoImage(file='AISHALogo.png')
        ttk.Label(self.AISHALogo, image = self.logo).grid(row=1,column=1,rowspan=1, padx=0)
        
        
        #Home Button
        ButtonHome = tk.Button(text="Home",width=bw,height=bh,bg='#869EE2')
        ButtonHome.place(x=center, y=250)
        #ButtonHome.bind('<Button>',self.home_btn)
        
        #Location
        ButtonLocation = tk.Button(text="Location",width=bw,height=bh,bg='#869EE2')
        ButtonLocation.place(x=center,y=300)
        #ButtonLocation.bind('<Button>',self.Location_btn)
        
        #Help
        ButtonHelp = tk.Button(text="Help",width=bw,height=bh,bg='#869EE2')
        ButtonHelp.place(x=center,y=350)
        #ButtonHelp.bind('<Button>',self.Help_btn)
        
        #Exit
        quitButton = tk.Button(text="Exit",width=bw,height=bh,bg='#869EE2')
        quitButton.place(x=center,y=400)
        
        #ButtonExit.bind('<Button>',self.Exit_btn)
        
        def client_exit(self):
            exit()
        
               
        
        

        


    
        


if __name__ == "__main__":
     root=tk.Tk()
     tutor_app=HomePage_GUI(root) #runs every function under class
     root.mainloop()
