# EDITOR=nano sudo visudo
# Change the following line: (:i to insert + esc to go back + :w to save + :q to quit)
# Defaults     env_reset
# to:
# Defaults     env_reset,timestamp_timeout=960 # in minutes


export PATH=$PATH:.
# export PATH=$PATH:/usr/bin


export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

# Bash
export LSCOLORS=gxBxhxDxfxhxhxhxhxcxcx # dark background

alias ?='pwd'
alias go='cd'
alias dir='pwd'
alias c='clear'
alias mkd='mkdir'
alias mkf='touch'
alias l='ls -a'

alias 86D='rmdir'

# alias BOOMD=''

function cre8go {

	mkdir -p $1
	cd $1
}


function conditional_function {
	# if first parameter is not empty - (I think that's what '-z' means... I'll have to look it up later!)
	if [ -z "$1" ]; then

	else
	fi
}



alias up='cd ../'
alias up2='cd ../../'
alias up3='cd ../../../'
alias up4='cd ../../../../'













