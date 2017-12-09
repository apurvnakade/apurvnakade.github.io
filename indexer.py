#! /usr/bin/python3


import os
import cgi

def list_files(directory_in_str):
    cur_dir = os.getcwd()
    os.chdir(directory_in_str)

    if os.path.isfile('index.html'):
        print("WARNING: index.html already exists in the folder : ", directory_in_str)
        while True:
            overwrite = input("WARNING: Do you wish to overwrite [yes/no] ? ")
            if overwrite == 'no':
                unsuccessful_writes.append(directory_in_str)
                os.chdir(cur_dir)
                return
            elif overwrite == 'yes':
                os.remove('index.html')
                break
            else:
                print("Invalid input. \n")

    files = [f for f in os.listdir(os.curdir) if (os.path.isfile(f) and not str(f).startswith('.'))]
    if not files:
        print("There are no files in the folder : " + directory_in_str)
        input("Press [ENTER] to continue.")
        unsuccessful_writes.append(directory_in_str)
        os.chdir(cur_dir)
        return

    index_html = open('index.html','w')

    index_html.write('<!DOCTYPE html>\n')
    index_html.write('<html>\n')
    index_html.write('\t<head>\n')
    index_html.write('\t\t<link rel=\"stylesheet\" href=\"https://apurvnakade.github.io/style.css\">\n')
    index_html.write('\t</head>\n')
    index_html.write('\t<body>\n')
    index_html.write('\t\t<div class = \"auto-generated\">\n')
    index_html.write('\t\t<table id=\"mainText\">\n')
    index_html.write('\t\t<tr>\n')
    index_html.write('\t\t<td>\n')
    index_html.write('\t\t\t<ul>\n')

    for file in files:
        # because path is object not string
        file_in_str = str(file)
        index_html.write('\t\t\t\t<li><a href=\"./' + cgi.escape(file_in_str) + '\">')
        index_html.write(file_in_str + '</a></li>\n')

    index_html.write('\t\t\t</ul>\n')
    index_html.write('\t\t</td>\n')
    index_html.write('\t\t</tr>\n')
    index_html.write('\t\t</table>\n')
    index_html.write('\t\t</div>\n')
    index_html.write('\t</body>\n')
    index_html.write('</html>')

    print("Successfully generated file: " + directory_in_str + "/index.html")
    successful_writes.append(directory_in_str)
    os.chdir(cur_dir)


successful_writes = []
unsuccessful_writes = []

print("\nThis script creates an index.html file containing the list of files in a folder.")
directory_in_str = input("Type the path to the folder: ")

if not os.path.isdir(directory_in_str):
    print("ERROR: ", directory_in_str," is not a valid directory. Terminating.")
    quit()


while True:
    recursive = input("Do you want to run the script recursively [y/n]: ")
#    recursive = 'n'
    if recursive in ['y','Y']:
        for root, directories, files in os.walk(directory_in_str):
            list_files(str(root))
        
        break
    elif recursive in ['n','N']:
        list_files(directory_in_str)
        break
    else:
        print("Invalid input. Enter [y/n]: ")

print("\nFailed to write index.html to the folders: ")
print(*unsuccessful_writes,"\n")
print("Successfully wrote index.html to the folders: ")
print(*successful_writes,"\n")




