# -------------------------------------------------------------
# template-keyboard - a template to start pygame programs with
#                     basic keyboard management
# 2013-01-04 Javier Cantero <jcantero@escomposlinux.org>
#
# LICENSE:
# Public Domain - Use what/where/how you like and remove this
# -------------------------------------------------------------

import pygame 


# general constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FRAME_RATE = 30
STEP=10
POSX_MAX=800
POSY_MAX=600

# keyboard
LEFT_KEY = pygame.K_LEFT
RIGHT_KEY = pygame.K_RIGHT
UP_KEY = pygame.K_UP
DOWN_KEY = pygame.K_DOWN


# game constants
HORIZONTAL_LEFT, HORIZONTAL_NOT, HORIZONTAL_RIGHT = ( -1, 0, 1 )
VERTICAL_UP, VERTICAL_NOT, VERTICAL_DOWN = ( -1, 0, 1 )


class Game():
    def __init__(self):
        pass

    def loop(self, screen):
	screen.fill( (0, 0, 0) ) # black background
	#inital position
	posx=0
	posy=0
        clock = pygame.time.Clock()
        left_key_pressed = right_key_pressed = up_key_pressed = down_key_pressed = False
        horizontal_dir = HORIZONTAL_NOT
        vertical_dir = VERTICAL_NOT
 
        while True:
            delta_t = clock.tick( FRAME_RATE )

          
    
            for event in pygame.event.get(): # event handling loop
                if event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
                    return # closing the window, end of the game loop

                # movement keys
                elif event.type == pygame.KEYDOWN:
                    if event.key == UP_KEY:
                        up_key_pressed = True
                        vertical_dir = VERTICAL_UP
                    elif event.key == DOWN_KEY:
                        down_key_pressed = True
                        vertical_dir = VERTICAL_DOWN
                    elif event.key == LEFT_KEY:
                        left_key_pressed = True
                        horizontal_dir = HORIZONTAL_LEFT
                    elif event.key == RIGHT_KEY:
                        right_key_pressed = True
                        horizontal_dir = HORIZONTAL_RIGHT
                elif event.type == pygame.KEYUP:
                    if event.key == UP_KEY:
                        up_key_pressed = False
                        if down_key_pressed:
                            vertical_dir = VERTICAL_DOWN
                        else:
                            vertical_dir = VERTICAL_NOT
                    elif event.key == DOWN_KEY:
                        down_key_pressed = False
                        if up_key_pressed:
                            vertical_dir = VERTICAL_UP
                        else:
                            vertical_dir = VERTICAL_NOT
                    elif event.key == LEFT_KEY:
                        left_key_pressed = False
                        if right_key_pressed:
                            horizontal_dir = HORIZONTAL_RIGHT
                        else:
                            horizontal_dir = HORIZONTAL_NOT
                    elif event.key == RIGHT_KEY:
                        right_key_pressed = False
                        if left_key_pressed:
                            horizontal_dir = HORIZONTAL_LEFT
                        else:
                            horizontal_dir = HORIZONTAL_NOT

		if horizontal_dir == HORIZONTAL_RIGHT and posx < POSX_MAX:
			posx+= STEP
		elif horizontal_dir == HORIZONTAL_RIGHT and posx >= POSX_MAX:
			posx= POSX_MAX
 		if horizontal_dir == HORIZONTAL_LEFT and posx < POSX_MAX:
			posx-= STEP
		elif horizontal_dir == HORIZONTAL_LEFT and posx >= POSX_MAX:
			posx= POSX_MAX

		if vertical_dir == VERTICAL_UP and posy < POSY_MAX:
			posy-= STEP
		elif vertical_dir == VERTICAL_UP and posy >= POSY_MAX:
			posy= POSY_MAX
 		if vertical_dir == VERTICAL_DOWN and posy < POSY_MAX:
			posy+= STEP
		elif vertical_dir == VERTICAL_DOWN and posy >= POSY_MAX:
			posy= POSY_MAX
 
            #
            #   U P D A T E
            # --------------------------------------------------------------

            if vertical_dir == VERTICAL_UP:
                pass
            elif vertical_dir == VERTICAL_DOWN:
                pass
            # change if for elif for 4-coordinates only movement
            if horizontal_dir == HORIZONTAL_LEFT:
                pass
            elif horizontal_dir == HORIZONTAL_RIGHT:
                pass

            #
            #   R E N D E R
            # --------------------------------------------------------------
    
 
            # blit the graphic elements to the screen surface
	    pygame.draw.circle(screen,(0,225,0),(posx,posy),5,0)
            # update display
            pygame.display.update()

    def quit(self):
        pass


def main():
    pygame.init()
    screen = pygame.display.set_mode( (SCREEN_WIDTH, SCREEN_HEIGHT) )
    pygame.display.set_caption( 'Keyboard' )
    #pygame.mouse.set_visible( False )

    game = Game()
    game.loop( screen )
    game.quit()

    pygame.quit()

if __name__ == '__main__':
    main()
