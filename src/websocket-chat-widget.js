��/ * * 
 
   *   W e b S o c k e t C h a t W i d g e t   -   A   c u s t o m i z a b l e   c h a t   w i d g e t   t h a t   c o n n e c t s   t o   a   W e b S o c k e t   s e r v e r 
 
   *   @ v e r s i o n   1 . 0 . 0 
 
   * / 
 
 ( f u n c t i o n ( w i n d o w )   { 
 
     ' u s e   s t r i c t ' ; 
 
 
 
     / /   L o a d   d e p e n d e n c i e s 
 
     i f   ( ! w i n d o w . D O M P u r i f y )   { 
 
         c o n s o l e . e r r o r ( ' W e b S o c k e t C h a t W i d g e t   r e q u i r e s   D O M P u r i f y .   P l e a s e   i n c l u d e   i t   i n   y o u r   p a g e . ' ) ; 
 
         r e t u r n ; 
 
     } 
 
     
 
     i f   ( ! w i n d o w . m a r k e d )   { 
 
         c o n s o l e . e r r o r ( ' W e b S o c k e t C h a t W i d g e t   r e q u i r e s   m a r k e d . j s .   P l e a s e   i n c l u d e   i t   i n   y o u r   p a g e . ' ) ; 
 
         r e t u r n ; 
 
     } 
 
 
 
     / /   D e f a u l t   c o n f i g u r a t i o n 
 
     c o n s t   D E F A U L T _ C O N F I G   =   { 
 
         w e b s o c k e t :   { 
 
             u r l :   ' w s s : / / a p i v i s f l o w . o n r e n d e r . c o m / n o d e s / c h a t a g e n t ' , 
 
             a u t o C o n n e c t :   t r u e 
 
         } , 
 
         c h a t I d :   ' ' ,   / /   R e q u i r e d   -   i d e n t i f i e s   w h i c h   a s s i s t a n t   t o   u s e 
 
         t h e m e :   { 
 
             p r i m a r y C o l o r :   ' # 2 5 6 3 e b ' ,           / /   M a i n   t h e m e   c o l o r   ( b u t t o n ,   h e a d e r ,   e t c ) 
 
             s e c o n d a r y C o l o r :   ' # 1 e 4 0 a f ' ,       / /   S e c o n d a r y   c o l o r   ( u s e r   a v a t a r ) 
 
             u s e r M e s s a g e B g :   ' # d b e a f e ' ,         / /   U s e r   m e s s a g e   b a c k g r o u n d 
 
             u s e r M e s s a g e T e x t :   ' # 1 e 4 0 a f ' ,     / /   U s e r   m e s s a g e   t e x t 
 
             b o t M e s s a g e B g :   ' # f 3 f 4 f 6 ' ,           / /   B o t   m e s s a g e   b a c k g r o u n d 
 
             b o t M e s s a g e T e x t :   ' # 1 f 2 9 3 7 ' ,       / /   B o t   m e s s a g e   t e x t 
 
             s y s t e m M e s s a g e B g :   ' # f 3 f 4 f 6 ' ,     / /   S y s t e m   m e s s a g e   b a c k g r o u n d 
 
             s y s t e m M e s s a g e T e x t :   ' # 4 b 5 5 6 3 '   / /   S y s t e m   m e s s a g e   t e x t 
 
         } , 
 
         s i z e :   { 
 
             w i d t h :   ' 3 8 0 p x ' ,             / /   W i d g e t   w i d t h 
 
             h e i g h t :   ' 5 5 0 p x ' ,           / /   W i d g e t   h e i g h t 
 
             b u t t o n S i z e :   ' 6 0 p x '       / /   C h a t   b u t t o n   s i z e 
 
         } , 
 
         p o s i t i o n :   { 
 
             b o t t o m :   ' 2 0 p x ' ,             / /   D i s t a n c e   f r o m   b o t t o m 
 
             r i g h t :   ' 2 0 p x '                 / /   D i s t a n c e   f r o m   r i g h t 
 
         } , 
 
         t e x t :   { 
 
             h e a d e r T i t l e :   ' C h a t   S u p p o r t ' , 
 
             w e l c o m e M e s s a g e :   ' W e l c o m e !   H o w   c a n   I   h e l p   y o u   t o d a y ? ' , 
 
             i n p u t P l a c e h o l d e r :   ' T y p e   y o u r   m e s s a g e . . . ' , 
 
             c o n n e c t i o n E r r o r :   ' C o n n e c t i o n   e r r o r .   P l e a s e   t r y   a g a i n   l a t e r . ' , 
 
             s e n d E r r o r :   ' F a i l e d   t o   s e n d   m e s s a g e .   P l e a s e   t r y   a g a i n . ' 
 
         } , 
 
         i c o n s :   { 
 
             / /   D e f a u l t   c h a t   b u t t o n   i c o n 
 
             c h a t B u t t o n :   ' < s v g   w i d t h = " 2 4 "   h e i g h t = " 2 4 "   v i e w B o x = " 0   0   2 4   2 4 "   f i l l = " n o n e "   s t r o k e = " c u r r e n t C o l o r "   s t r o k e - w i d t h = " 2 " > < p a t h   d = " M 2 1   1 5 a 2   2   0   0   1 - 2   2 H 7 l - 4   4 V 5 a 2   2   0   0   1   2 - 2 h 1 4 a 2   2   0   0   1   2   2 z " > < / p a t h > < / s v g > ' , 
 
             / /   D e f a u l t   u s e r   a v a t a r   i c o n 
 
             u s e r A v a t a r :   ' < s v g   w i d t h = " 1 6 "   h e i g h t = " 1 6 "   v i e w B o x = " 0   0   2 4   2 4 "   f i l l = " n o n e "   s t r o k e = " c u r r e n t C o l o r "   s t r o k e - w i d t h = " 2 " > < c i r c l e   c x = " 1 2 "   c y = " 7 "   r = " 4 " > < / c i r c l e > < p a t h   d = " M 1 2   1 1 c - 2 . 2 1   0 - 4   1 . 7 9 - 4   4 v 5 h 8 v - 5 c 0 - 2 . 2 1 - 1 . 7 9 - 4 - 4 - 4 z " > < / p a t h > < / s v g > ' , 
 
             / /   D e f a u l t   b o t   a v a t a r   i c o n 
 
             b o t A v a t a r :   ' < s v g   w i d t h = " 1 6 "   h e i g h t = " 1 6 "   v i e w B o x = " 0   0   2 4   2 4 "   f i l l = " n o n e "   s t r o k e = " c u r r e n t C o l o r "   s t r o k e - w i d t h = " 2 " > < c i r c l e   c x = " 1 2 "   c y = " 8 "   r = " 5 " > < / c i r c l e > < p a t h   d = " M 2 0   2 1 v - 2 a 7   7   0   0   0 - 1 4   0 v 2 " > < / p a t h > < / s v g > ' , 
 
             / /   D e f a u l t   s e n d   b u t t o n   i c o n 
 
             s e n d B u t t o n :   ' < s v g   w i d t h = " 1 8 "   h e i g h t = " 1 8 "   v i e w B o x = " 0   0   2 4   2 4 "   f i l l = " n o n e "   s t r o k e = " c u r r e n t C o l o r "   s t r o k e - w i d t h = " 2 " > < l i n e   x 1 = " 2 2 "   y 1 = " 2 "   x 2 = " 1 1 "   y 2 = " 1 3 " > < / l i n e > < p o l y g o n   p o i n t s = " 2 2   2   1 5   2 2   1 1   1 3   2   9   2 2   2 " > < / p o l y g o n > < / s v g > ' 
 
         } , 
 
         p r e d e f i n e d Q u e s t i o n s :   { 
 
             e n a b l e d :   f a l s e , 
 
             p o s i t i o n :   ' t o p ' ,   / /   ' t o p ' ,   ' b o t t o m ' ,   o r   ' w e l c o m e ' 
 
             s t y l e :   ' b u t t o n ' ,   / /   ' b u t t o n '   o r   ' p i l l ' 
 
             q u e s t i o n s :   [ 
 
                 / /   E x a m p l e s : 
 
                 / /   {   t e x t :   " W h a t   a r e   y o u r   b u s i n e s s   h o u r s ? " ,   v a l u e :   " W h a t   a r e   y o u r   b u s i n e s s   h o u r s ? "   } , 
 
                 / /   {   t e x t :   " H o w   d o   I   r e s e t   m y   p a s s w o r d ? " ,   v a l u e :   " I   n e e d   h e l p   r e s e t t i n g   m y   p a s s w o r d "   } 
 
             ] , 
 
             b u t t o n C o l o r :   ' # 3 b 8 2 f 6 ' ,     / /   B a c k g r o u n d   c o l o r 
 
             t e x t C o l o r :   ' # f f f f f f ' ,         / /   T e x t   c o l o r 
 
             h o v e r C o l o r :   ' # 2 5 6 3 e b ' ,       / /   C o l o r   o n   h o v e r 
 
             h i d e A f t e r S e l e c t i o n :   f a l s e   / /   W h e t h e r   t o   h i d e   b u t t o n s   a f t e r   a   s e l e c t i o n 
 
         } , 
 
         s a n i t i z a t i o n :   { 
 
             i n p u t :   ' b a s i c ' ,   / /   ' n o n e ' ,   ' b a s i c ' ,   o r   ' s t r i c t ' 
 
             o u t p u t :   t r u e         / /   W h e t h e r   t o   s a n i t i z e   r e c e i v e d   m e s s a g e s 
 
         } 
 
     } ; 
 
 
 
     / * * 
 
       *   W e b S o c k e t C h a t W i d g e t   c l a s s   -   C r e a t e s   a n d   m a n a g e s   t h e   c h a t   w i d g e t 
 
       * / 
 
     c l a s s   W e b S o c k e t C h a t W i d g e t   { 
 
         / * * 
 
           *   C r e a t e   a   n e w   c h a t   w i d g e t 
 
           *   @ p a r a m   { O b j e c t }   c o n f i g   -   C o n f i g u r a t i o n   o p t i o n s 
 
           * / 
 
         c o n s t r u c t o r ( c o n f i g )   { 
 
             / /   V a l i d a t e   r e q u i r e d   f i e l d s 
 
             i f   ( ! c o n f i g   | |   ! c o n f i g . c h a t I d )   { 
 
                 c o n s o l e . e r r o r ( ' W e b S o c k e t C h a t W i d g e t :   c h a t I d   i s   r e q u i r e d ' ) ; 
 
                 r e t u r n ; 
 
             } 
 
             
 
             / /   M e r g e   c o n f i g u r a t i o n s   -   d e e p   m e r g e   c u s t o m   c o n f i g   w i t h   d e f a u l t s 
 
             t h i s . c o n f i g   =   t h i s . _ m e r g e C o n f i g ( D E F A U L T _ C O N F I G ,   c o n f i g ) ; 
 
             
 
             / /   I n i t i a l i z e   s t a t e 
 
             t h i s . s o c k e t   =   n u l l ; 
 
             t h i s . i s C o n n e c t e d   =   f a l s e ; 
 
             t h i s . s t r e a m S t a t e   =   { 
 
                 c u r r e n t B o t M e s s a g e :   n u l l , 
 
                 a c t i v e M e s s a g e C o n t e n t :   ' ' , 
 
                 i s S t r e a m i n g :   f a l s e , 
 
                 t y p i n g I n d i c a t o r :   n u l l , 
 
                 c u r r e n t M e s s a g e I d :   n u l l , 
 
                 s e n d i n g S p i n n e r :   n u l l 
 
             } ; 
 
             
 
             / /   C o n t a i n e r   f o r   D O M   e l e m e n t s 
 
             t h i s . e l e m e n t s   =   { } ; 
 
             
 
             / /   S e t   u p   d e p e n d e n c i e s 
 
             t h i s . _ s e t u p D e p e n d e n c i e s ( ) ; 
 
             
 
             / /   C r e a t e   u n i q u e   n a m e s p a c e   f o r   t h i s   w i d g e t   i n s t a n c e 
 
             t h i s . n a m e s p a c e   =   ' w s - c h a t - '   +   M a t h . r a n d o m ( ) . t o S t r i n g ( 3 6 ) . s u b s t r ( 2 ,   9 ) ; 
 
             
 
             / /   I n i t i a l i z e   t h e   w i d g e t 
 
             t h i s . _ i n i t ( ) ; 
 
         } 
 
         
 
         / * * 
 
           *   I n i t i a l i z e   t h e   w i d g e t 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ i n i t ( )   { 
 
             / /   C r e a t e   w i d g e t   e l e m e n t s 
 
             t h i s . _ c r e a t e W i d g e t E l e m e n t s ( ) ; 
 
             
 
             / /   I n j e c t   C S S   s t y l e s 
 
             t h i s . _ i n j e c t S t y l e s ( ) ; 
 
             
 
             / /   A t t a c h   e v e n t   l i s t e n e r s 
 
             t h i s . _ a t t a c h E v e n t L i s t e n e r s ( ) ; 
 
             
 
             / /   C r e a t e   p r e d e f i n e d   q u e s t i o n   b u t t o n s   i f   e n a b l e d 
 
             i f   ( t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . e n a b l e d )   { 
 
                 t h i s . _ c r e a t e P r e d e f i n e d B u t t o n s ( ) ; 
 
             } 
 
             
 
             / /   A u t o m a t i c a l l y   c o n n e c t   i f   c o n f i g u r e d 
 
             i f   ( t h i s . c o n f i g . w e b s o c k e t . a u t o C o n n e c t )   { 
 
                 t h i s . _ c o n n e c t W e b S o c k e t ( ) ; 
 
             } 
 
         } 
 
         
 
         / * * 
 
           *   S e t   u p   m a r k e d   a n d   D O M P u r i f y   f o r   m e s s a g e   f o r m a t t i n g 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ s e t u p D e p e n d e n c i e s ( )   { 
 
             / /   S e t   u p   m a r k d o w n   r e n d e r e r   w i t h   a p p r o p r i a t e   o p t i o n s 
 
             m a r k e d . s e t O p t i o n s ( { 
 
                 g f m :   t r u e , 
 
                 b r e a k s :   t r u e , 
 
                 s a n i t i z e :   f a l s e ,   / /   W e ' l l   u s e   D O M P u r i f y   i n s t e a d   f o r   b e t t e r   c o n t r o l 
 
                 h i g h l i g h t :   f u n c t i o n ( c o d e ,   l a n g )   { 
 
                     r e t u r n   c o d e ; 
 
                 } 
 
             } ) ; 
 
         } 
 
         
 
         / * * 
 
           *   D a r k e n   a   h e x   c o l o r   b y   a   p e r c e n t a g e 
 
           *   @ p a r a m   { s t r i n g }   h e x   -   H e x   c o l o r   c o d e 
 
           *   @ p a r a m   { n u m b e r }   p e r c e n t   -   P e r c e n t a g e   t o   d a r k e n   ( 0 - 1 0 0 ) 
 
           *   @ r e t u r n s   { s t r i n g }   -   D a r k e n e d   h e x   c o l o r 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ d a r k e n C o l o r ( h e x ,   p e r c e n t )   { 
 
             / /   R e m o v e   t h e   #   i f   p r e s e n t 
 
             h e x   =   h e x . r e p l a c e ( / ^ # / ,   ' ' ) ; 
 
             
 
             / /   C o n v e r t   t o   R G B 
 
             l e t   r   =   p a r s e I n t ( h e x . s u b s t r i n g ( 0 ,   2 ) ,   1 6 ) ; 
 
             l e t   g   =   p a r s e I n t ( h e x . s u b s t r i n g ( 2 ,   4 ) ,   1 6 ) ; 
 
             l e t   b   =   p a r s e I n t ( h e x . s u b s t r i n g ( 4 ,   6 ) ,   1 6 ) ; 
 
             
 
             / /   D a r k e n 
 
             r   =   M a t h . f l o o r ( r   *   ( 1 0 0   -   p e r c e n t )   /   1 0 0 ) ; 
 
             g   =   M a t h . f l o o r ( g   *   ( 1 0 0   -   p e r c e n t )   /   1 0 0 ) ; 
 
             b   =   M a t h . f l o o r ( b   *   ( 1 0 0   -   p e r c e n t )   /   1 0 0 ) ; 
 
             
 
             / /   C o n v e r t   b a c k   t o   h e x 
 
             r e t u r n   ` # $ { r . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 2 ,   ' 0 ' ) } $ { g . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 2 ,   ' 0 ' ) } $ { b . t o S t r i n g ( 1 6 ) . p a d S t a r t ( 2 ,   ' 0 ' ) } ` ; 
 
         } 
 
         
 
         / * * 
 
           *   D e e p   m e r g e   t w o   o b j e c t s 
 
           *   @ p a r a m   { O b j e c t }   d e f a u l t s   -   D e f a u l t   c o n f i g u r a t i o n 
 
           *   @ p a r a m   { O b j e c t }   c u s t o m   -   U s e r   c o n f i g u r a t i o n 
 
           *   @ r e t u r n s   { O b j e c t }   -   M e r g e d   c o n f i g u r a t i o n 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ m e r g e C o n f i g ( d e f a u l t s ,   c u s t o m )   { 
 
             c o n s t   m e r g e d   =   J S O N . p a r s e ( J S O N . s t r i n g i f y ( d e f a u l t s ) ) ;   / /   D e e p   c l o n e   d e f a u l t s 
 
             
 
             f o r   ( c o n s t   k e y   i n   c u s t o m )   { 
 
                 i f   ( c u s t o m . h a s O w n P r o p e r t y ( k e y ) )   { 
 
                     i f   ( t y p e o f   c u s t o m [ k e y ]   = = =   ' o b j e c t '   & &   c u s t o m [ k e y ]   ! = =   n u l l   & &   
 
                             t y p e o f   m e r g e d [ k e y ]   = = =   ' o b j e c t '   & &   m e r g e d [ k e y ]   ! = =   n u l l   & & 
 
                             ! A r r a y . i s A r r a y ( c u s t o m [ k e y ] ) )   { 
 
                         / /   I f   b o t h   p r o p e r t i e s   a r e   o b j e c t s ,   r e c u r s i v e l y   m e r g e   t h e m 
 
                         m e r g e d [ k e y ]   =   t h i s . _ m e r g e C o n f i g ( m e r g e d [ k e y ] ,   c u s t o m [ k e y ] ) ; 
 
                     }   e l s e   { 
 
                         / /   O t h e r w i s e ,   o v e r r i d e   w i t h   c u s t o m   v a l u e 
 
                         m e r g e d [ k e y ]   =   c u s t o m [ k e y ] ; 
 
                     } 
 
                 } 
 
             } 
 
             
 
             r e t u r n   m e r g e d ; 
 
         } 
 
         
 
         / * * 
 
           *   C r e a t e   a l l   w i d g e t   D O M   e l e m e n t s 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ c r e a t e W i d g e t E l e m e n t s ( )   { 
 
             / /   C r e a t e   c h a t   b u t t o n 
 
             c o n s t   c h a t B u t t o n   =   d o c u m e n t . c r e a t e E l e m e n t ( ' b u t t o n ' ) ; 
 
             c h a t B u t t o n . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - b u t t o n ` ; 
 
             c h a t B u t t o n . i n n e r H T M L   =   t h i s . c o n f i g . i c o n s . c h a t B u t t o n ; 
 
             d o c u m e n t . b o d y . a p p e n d C h i l d ( c h a t B u t t o n ) ; 
 
             t h i s . e l e m e n t s . c h a t B u t t o n   =   c h a t B u t t o n ; 
 
             
 
             / /   C r e a t e   c h a t   p a n e l 
 
             c o n s t   c h a t P a n e l   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             c h a t P a n e l . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - p a n e l ` ; 
 
             d o c u m e n t . b o d y . a p p e n d C h i l d ( c h a t P a n e l ) ; 
 
             t h i s . e l e m e n t s . c h a t P a n e l   =   c h a t P a n e l ; 
 
             
 
             / /   C r e a t e   h e a d e r 
 
             c o n s t   c h a t H e a d e r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             c h a t H e a d e r . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - h e a d e r ` ; 
 
             
 
             c o n s t   h e a d e r T i t l e   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             h e a d e r T i t l e . t e x t C o n t e n t   =   t h i s . c o n f i g . t e x t . h e a d e r T i t l e ; 
 
             
 
             c o n s t   c l o s e B u t t o n   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             c l o s e B u t t o n . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - c l o s e ` ; 
 
             c l o s e B u t t o n . i n n e r H T M L   =   ' & t i m e s ; ' ; 
 
             
 
             c h a t H e a d e r . a p p e n d C h i l d ( h e a d e r T i t l e ) ; 
 
             c h a t H e a d e r . a p p e n d C h i l d ( c l o s e B u t t o n ) ; 
 
             c h a t P a n e l . a p p e n d C h i l d ( c h a t H e a d e r ) ; 
 
             t h i s . e l e m e n t s . c h a t H e a d e r   =   c h a t H e a d e r ; 
 
             t h i s . e l e m e n t s . c l o s e B u t t o n   =   c l o s e B u t t o n ; 
 
             
 
             / /   C r e a t e   m e s s a g e s   c o n t a i n e r 
 
             c o n s t   c h a t M e s s a g e s   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             c h a t M e s s a g e s . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - m e s s a g e s ` ; 
 
             c h a t P a n e l . a p p e n d C h i l d ( c h a t M e s s a g e s ) ; 
 
             t h i s . e l e m e n t s . c h a t M e s s a g e s   =   c h a t M e s s a g e s ; 
 
             
 
             / /   A d d   w e l c o m e   m e s s a g e 
 
             i f   ( t h i s . c o n f i g . t e x t . w e l c o m e M e s s a g e )   { 
 
                 c o n s t   w e l c o m e W r a p p e r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
                 w e l c o m e W r a p p e r . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - m e s s a g e - w i t h - a v a t a r   $ { t h i s . n a m e s p a c e } - b o t - m e s s a g e - c o n t a i n e r ` ; 
 
                 
 
                 c o n s t   b o t A v a t a r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
                 b o t A v a t a r . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - a v a t a r   $ { t h i s . n a m e s p a c e } - b o t - a v a t a r ` ; 
 
                 b o t A v a t a r . i n n e r H T M L   =   t h i s . c o n f i g . i c o n s . b o t A v a t a r ; 
 
                 
 
                 c o n s t   w e l c o m e M s g   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
                 w e l c o m e M s g . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - m e s s a g e   $ { t h i s . n a m e s p a c e } - b o t - m e s s a g e ` ; 
 
                 w e l c o m e M s g . t e x t C o n t e n t   =   t h i s . c o n f i g . t e x t . w e l c o m e M e s s a g e ; 
 
                 
 
                 w e l c o m e W r a p p e r . a p p e n d C h i l d ( b o t A v a t a r ) ; 
 
                 w e l c o m e W r a p p e r . a p p e n d C h i l d ( w e l c o m e M s g ) ; 
 
                 c h a t M e s s a g e s . a p p e n d C h i l d ( w e l c o m e W r a p p e r ) ; 
 
             } 
 
             
 
             / /   C r e a t e   i n p u t   c o n t a i n e r 
 
             c o n s t   i n p u t C o n t a i n e r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             i n p u t C o n t a i n e r . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - i n p u t - c o n t a i n e r ` ; 
 
             
 
             c o n s t   c h a t I n p u t   =   d o c u m e n t . c r e a t e E l e m e n t ( ' i n p u t ' ) ; 
 
             c h a t I n p u t . t y p e   =   ' t e x t ' ; 
 
             c h a t I n p u t . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - i n p u t ` ; 
 
             c h a t I n p u t . p l a c e h o l d e r   =   t h i s . c o n f i g . t e x t . i n p u t P l a c e h o l d e r ; 
 
             
 
             c o n s t   s e n d B u t t o n   =   d o c u m e n t . c r e a t e E l e m e n t ( ' b u t t o n ' ) ; 
 
             s e n d B u t t o n . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - s e n d - b u t t o n ` ; 
 
             s e n d B u t t o n . i n n e r H T M L   =   t h i s . c o n f i g . i c o n s . s e n d B u t t o n ; 
 
             
 
             i n p u t C o n t a i n e r . a p p e n d C h i l d ( c h a t I n p u t ) ; 
 
             i n p u t C o n t a i n e r . a p p e n d C h i l d ( s e n d B u t t o n ) ; 
 
             c h a t P a n e l . a p p e n d C h i l d ( i n p u t C o n t a i n e r ) ; 
 
             
 
             t h i s . e l e m e n t s . i n p u t C o n t a i n e r   =   i n p u t C o n t a i n e r ; 
 
             t h i s . e l e m e n t s . c h a t I n p u t   =   c h a t I n p u t ; 
 
             t h i s . e l e m e n t s . s e n d B u t t o n   =   s e n d B u t t o n ; 
 
         } 
 
         
 
         / * * 
 
           *   C r e a t e   p r e d e f i n e d   q u e s t i o n   b u t t o n s 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ c r e a t e P r e d e f i n e d B u t t o n s ( )   { 
 
             i f   ( ! t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . e n a b l e d   | |   
 
                     ! t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . q u e s t i o n s   | | 
 
                     t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . q u e s t i o n s . l e n g t h   = = =   0 )   { 
 
                 r e t u r n ; 
 
             } 
 
             
 
             / /   C r e a t e   c o n t a i n e r   f o r   b u t t o n s 
 
             c o n s t   c o n t a i n e r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
             c o n t a i n e r . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - p r e d e f i n e d - c o n t a i n e r ` ; 
 
             c o n t a i n e r . c l a s s L i s t . a d d ( ` $ { t h i s . n a m e s p a c e } - p r e d e f i n e d - $ { t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . p o s i t i o n } ` ) ; 
 
             
 
             / /   C r e a t e   e a c h   b u t t o n 
 
             t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . q u e s t i o n s . f o r E a c h ( q u e s t i o n   = >   { 
 
                 c o n s t   b u t t o n   =   d o c u m e n t . c r e a t e E l e m e n t ( ' b u t t o n ' ) ; 
 
                 b u t t o n . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - p r e d e f i n e d - b u t t o n ` ; 
 
                 b u t t o n . c l a s s L i s t . a d d ( ` $ { t h i s . n a m e s p a c e } - p r e d e f i n e d - $ { t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . s t y l e } ` ) ; 
 
                 b u t t o n . t e x t C o n t e n t   =   q u e s t i o n . t e x t ; 
 
                 
 
                 / /   A d d   c l i c k   h a n d l e r 
 
                 b u t t o n . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   ( )   = >   { 
 
                     c o n s t   v a l u e   =   q u e s t i o n . v a l u e   | |   q u e s t i o n . t e x t ; 
 
                     t h i s . _ h a n d l e P r e d e f i n e d Q u e s t i o n ( v a l u e ) ; 
 
                 } ) ; 
 
                 
 
                 c o n t a i n e r . a p p e n d C h i l d ( b u t t o n ) ; 
 
             } ) ; 
 
             
 
             / /   A d d   t o   D O M   b a s e d   o n   p o s i t i o n 
 
             i f   ( t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . p o s i t i o n   = = =   ' t o p ' )   { 
 
                 / /   I n s e r t   a s   f i r s t   c h i l d   o f   m e s s a g e s   c o n t a i n e r 
 
                 t h i s . e l e m e n t s . c h a t M e s s a g e s . i n s e r t B e f o r e ( c o n t a i n e r ,   t h i s . e l e m e n t s . c h a t M e s s a g e s . f i r s t C h i l d ) ; 
 
             }   e l s e   i f   ( t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . p o s i t i o n   = = =   ' b o t t o m ' )   { 
 
                 / /   I n s e r t   b e f o r e   i n p u t   c o n t a i n e r 
 
                 t h i s . e l e m e n t s . c h a t P a n e l . i n s e r t B e f o r e ( c o n t a i n e r ,   t h i s . e l e m e n t s . i n p u t C o n t a i n e r ) ; 
 
             }   e l s e   i f   ( t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . p o s i t i o n   = = =   ' w e l c o m e ' )   { 
 
                 / /   I n s e r t   a f t e r   w e l c o m e   m e s s a g e 
 
                 c o n s t   f i r s t M s g   =   t h i s . e l e m e n t s . c h a t M e s s a g e s . q u e r y S e l e c t o r ( ` . $ { t h i s . n a m e s p a c e } - b o t - m e s s a g e - c o n t a i n e r ` ) ; 
 
                 i f   ( f i r s t M s g   & &   f i r s t M s g . n e x t S i b l i n g )   { 
 
                     t h i s . e l e m e n t s . c h a t M e s s a g e s . i n s e r t B e f o r e ( c o n t a i n e r ,   f i r s t M s g . n e x t S i b l i n g ) ; 
 
                 }   e l s e   { 
 
                     t h i s . e l e m e n t s . c h a t M e s s a g e s . a p p e n d C h i l d ( c o n t a i n e r ) ; 
 
                 } 
 
             } 
 
             
 
             t h i s . e l e m e n t s . p r e d e f i n e d C o n t a i n e r   =   c o n t a i n e r ; 
 
         } 
 
         
 
         / * * 
 
           *   H a n d l e   p r e d e f i n e d   q u e s t i o n   c l i c k 
 
           *   @ p a r a m   { s t r i n g }   q u e s t i o n T e x t   -   T h e   q u e s t i o n   t e x t / v a l u e   t o   s e n d 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ h a n d l e P r e d e f i n e d Q u e s t i o n ( q u e s t i o n T e x t )   { 
 
             / /   A d d   t h e   q u e s t i o n   a s   a   u s e r   m e s s a g e 
 
             t h i s . _ a d d M e s s a g e ( ' u s e r ' ,   q u e s t i o n T e x t ) ; 
 
             
 
             / /   C l e a r   i n p u t   i f   i t   h a s   t e x t 
 
             t h i s . e l e m e n t s . c h a t I n p u t . v a l u e   =   ' ' ; 
 
             
 
             / /   S h o w   s e n d i n g   s p i n n e r 
 
             t h i s . _ s h o w S e n d i n g S p i n n e r ( ) ; 
 
             
 
             / /   S e n d   t o   s e r v e r 
 
             t h i s . _ s e n d M e s s a g e ( q u e s t i o n T e x t ) ; 
 
             
 
             / /   H i d e   b u t t o n s   i f   c o n f i g u r e d 
 
             i f   ( t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . h i d e A f t e r S e l e c t i o n   & &   t h i s . e l e m e n t s . p r e d e f i n e d C o n t a i n e r )   { 
 
                 t h i s . e l e m e n t s . p r e d e f i n e d C o n t a i n e r . s t y l e . d i s p l a y   =   ' n o n e ' ; 
 
             } 
 
         } 
 
         
 
         / * * 
 
           *   G e n e r a t e   a n d   i n j e c t   C S S   s t y l e s 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ i n j e c t S t y l e s ( )   { 
 
             c o n s t   {   t h e m e ,   s i z e ,   p o s i t i o n   }   =   t h i s . c o n f i g ; 
 
             c o n s t   n s   =   t h i s . n a m e s p a c e ; 
 
             
 
             / /   C r e a t e   C S S   w i t h   d y n a m i c   p r o p e r t i e s   f r o m   c o n f i g 
 
             c o n s t   c s s   =   ` 
 
                 / *   C h a t   W i d g e t   S t y l e s   * / 
 
                 . $ { n s } - b u t t o n   { 
 
                     p o s i t i o n :   f i x e d ; 
 
                     b o t t o m :   $ { p o s i t i o n . b o t t o m } ; 
 
                     r i g h t :   $ { p o s i t i o n . r i g h t } ; 
 
                     w i d t h :   $ { s i z e . b u t t o n S i z e } ; 
 
                     h e i g h t :   $ { s i z e . b u t t o n S i z e } ; 
 
                     b o r d e r - r a d i u s :   5 0 % ; 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                     c o l o r :   w h i t e ; 
 
                     d i s p l a y :   f l e x ; 
 
                     a l i g n - i t e m s :   c e n t e r ; 
 
                     j u s t i f y - c o n t e n t :   c e n t e r ; 
 
                     c u r s o r :   p o i n t e r ; 
 
                     b o r d e r :   n o n e ; 
 
                     b o x - s h a d o w :   0   2 p x   1 0 p x   r g b a ( 0 , 0 , 0 , 0 . 2 ) ; 
 
                     z - i n d e x :   9 9 9 9 ; 
 
                     t r a n s i t i o n :   t r a n s f o r m   0 . 2 s ; 
 
                 } 
 
                 
 
                 . $ { n s } - b u t t o n : h o v e r   { 
 
                     t r a n s f o r m :   s c a l e ( 1 . 0 5 ) ; 
 
                 } 
 
                 
 
                 . $ { n s } - p a n e l   { 
 
                     p o s i t i o n :   f i x e d ; 
 
                     b o t t o m :   c a l c ( $ { p o s i t i o n . b o t t o m }   +   8 0 p x ) ; 
 
                     r i g h t :   $ { p o s i t i o n . r i g h t } ; 
 
                     w i d t h :   $ { s i z e . w i d t h } ; 
 
                     h e i g h t :   $ { s i z e . h e i g h t } ; 
 
                     b a c k g r o u n d :   w h i t e ; 
 
                     b o r d e r - r a d i u s :   1 0 p x ; 
 
                     b o x - s h a d o w :   0   5 p x   1 5 p x   r g b a ( 0 , 0 , 0 , 0 . 2 ) ; 
 
                     d i s p l a y :   n o n e ; 
 
                     f l e x - d i r e c t i o n :   c o l u m n ; 
 
                     o v e r f l o w :   h i d d e n ; 
 
                     z - i n d e x :   9 9 9 8 ; 
 
                 } 
 
                 
 
                 . $ { n s } - h e a d e r   { 
 
                     b a c k g r o u n d :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                     c o l o r :   w h i t e ; 
 
                     p a d d i n g :   1 5 p x ; 
 
                     d i s p l a y :   f l e x ; 
 
                     j u s t i f y - c o n t e n t :   s p a c e - b e t w e e n ; 
 
                     a l i g n - i t e m s :   c e n t e r ; 
 
                     f o n t - w e i g h t :   b o l d ; 
 
                 } 
 
                 
 
                 . $ { n s } - c l o s e   { 
 
                     c u r s o r :   p o i n t e r ; 
 
                     f o n t - s i z e :   2 0 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - m e s s a g e s   { 
 
                     f l e x :   1 ; 
 
                     p a d d i n g :   1 5 p x ; 
 
                     o v e r f l o w - y :   a u t o ; 
 
                     d i s p l a y :   f l e x ; 
 
                     f l e x - d i r e c t i o n :   c o l u m n ; 
 
                 } 
 
                 
 
                 . $ { n s } - a v a t a r   { 
 
                     w i d t h :   3 2 p x ; 
 
                     h e i g h t :   3 2 p x ; 
 
                     b o r d e r - r a d i u s :   5 0 % ; 
 
                     c o l o r :   w h i t e ; 
 
                     d i s p l a y :   f l e x ; 
 
                     a l i g n - i t e m s :   c e n t e r ; 
 
                     j u s t i f y - c o n t e n t :   c e n t e r ; 
 
                     f l e x - s h r i n k :   0 ; 
 
                 } 
 
                 
 
                 . $ { n s } - b o t - a v a t a r   { 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                     m a r g i n - r i g h t :   1 0 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - u s e r - a v a t a r   { 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . s e c o n d a r y C o l o r } ; 
 
                     m a r g i n - l e f t :   1 0 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - m e s s a g e - w i t h - a v a t a r   { 
 
                     d i s p l a y :   f l e x ; 
 
                     a l i g n - i t e m s :   f l e x - s t a r t ; 
 
                     m a x - w i d t h :   8 5 % ; 
 
                     m a r g i n - b o t t o m :   1 0 p x ; 
 
                     g a p :   1 6 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - b o t - m e s s a g e - c o n t a i n e r   { 
 
                     a l i g n - s e l f :   f l e x - s t a r t ; 
 
                 } 
 
                 
 
                 . $ { n s } - u s e r - m e s s a g e - c o n t a i n e r   { 
 
                     a l i g n - s e l f :   f l e x - e n d ; 
 
                     f l e x - d i r e c t i o n :   r o w - r e v e r s e ; 
 
                     g a p :   2 0 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - m e s s a g e   { 
 
                     m a x - w i d t h :   1 0 0 % ; 
 
                     m a r g i n - b o t t o m :   0 ; 
 
                     p a d d i n g :   1 0 p x   1 5 p x ; 
 
                     b o r d e r - r a d i u s :   1 8 p x ; 
 
                     o v e r f l o w - w r a p :   b r e a k - w o r d ; 
 
                     o v e r f l o w :   h i d d e n ; 
 
                 } 
 
                 
 
                 . $ { n s } - m e s s a g e   p   { 
 
                     m a r g i n :   0   0   1 0 p x   0 ; 
 
                 } 
 
                 
 
                 . $ { n s } - m e s s a g e   p : l a s t - c h i l d   { 
 
                     m a r g i n - b o t t o m :   0 ; 
 
                 } 
 
                 
 
                 . $ { n s } - s y s t e m - m e s s a g e   { 
 
                     a l i g n - s e l f :   c e n t e r ; 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . s y s t e m M e s s a g e B g } ; 
 
                     c o l o r :   $ { t h e m e . s y s t e m M e s s a g e T e x t } ; 
 
                     t e x t - a l i g n :   c e n t e r ; 
 
                     b o r d e r - r a d i u s :   8 p x ; 
 
                     p a d d i n g :   8 p x   1 2 p x ; 
 
                     m a r g i n :   1 0 p x   0 ; 
 
                     f o n t - s i z e :   0 . 8 7 5 r e m ; 
 
                     m a x - w i d t h :   8 5 % ; 
 
                 } 
 
                 
 
                 . $ { n s } - u s e r - m e s s a g e   { 
 
                     a l i g n - s e l f :   f l e x - e n d ; 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . u s e r M e s s a g e B g } ; 
 
                     c o l o r :   $ { t h e m e . u s e r M e s s a g e T e x t } ; 
 
                     b o r d e r - r a d i u s :   1 8 p x   1 8 p x   0   1 8 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - b o t - m e s s a g e   { 
 
                     a l i g n - s e l f :   f l e x - s t a r t ; 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . b o t M e s s a g e B g } ; 
 
                     c o l o r :   $ { t h e m e . b o t M e s s a g e T e x t } ; 
 
                     b o r d e r - r a d i u s :   1 8 p x   1 8 p x   1 8 p x   0 ; 
 
                 } 
 
                 
 
                 . $ { n s } - i n p u t - c o n t a i n e r   { 
 
                     d i s p l a y :   f l e x ; 
 
                     p a d d i n g :   1 0 p x ; 
 
                     b o r d e r - t o p :   1 p x   s o l i d   # e 5 e 7 e b ; 
 
                 } 
 
                 
 
                 . $ { n s } - i n p u t   { 
 
                     f l e x :   1 ; 
 
                     p a d d i n g :   1 0 p x   1 5 p x ; 
 
                     b o r d e r - r a d i u s :   2 4 p x ; 
 
                     b o r d e r :   1 p x   s o l i d   # d 1 d 5 d b ; 
 
                     m a r g i n - r i g h t :   1 0 p x ; 
 
                     o u t l i n e :   n o n e ; 
 
                     f o n t - s i z e :   1 6 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - i n p u t : f o c u s   { 
 
                     b o r d e r - c o l o r :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d - b u t t o n   { 
 
                     b a c k g r o u n d :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                     c o l o r :   w h i t e ; 
 
                     b o r d e r :   n o n e ; 
 
                     b o r d e r - r a d i u s :   5 0 % ; 
 
                     w i d t h :   4 0 p x ; 
 
                     h e i g h t :   4 0 p x ; 
 
                     c u r s o r :   p o i n t e r ; 
 
                     d i s p l a y :   f l e x ; 
 
                     a l i g n - i t e m s :   c e n t e r ; 
 
                     j u s t i f y - c o n t e n t :   c e n t e r ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d - b u t t o n : h o v e r   { 
 
                     b a c k g r o u n d :   $ { t h i s . _ d a r k e n C o l o r ( t h e m e . p r i m a r y C o l o r ,   1 0 ) } ; 
 
                 } 
 
                 
 
                 / *   T y p i n g   i n d i c a t o r   * / 
 
                 . $ { n s } - t y p i n g - i n d i c a t o r   { 
 
                     d i s p l a y :   f l e x ; 
 
                     a l i g n - i t e m s :   c e n t e r ; 
 
                     m a r g i n - b o t t o m :   1 0 p x ; 
 
                     a l i g n - s e l f :   f l e x - s t a r t ; 
 
                 } 
 
                 
 
                 . $ { n s } - t y p i n g - i n d i c a t o r   s p a n   { 
 
                     h e i g h t :   8 p x ; 
 
                     w i d t h :   8 p x ; 
 
                     b a c k g r o u n d - c o l o r :   # 6 b 7 2 8 0 ; 
 
                     b o r d e r - r a d i u s :   5 0 % ; 
 
                     d i s p l a y :   i n l i n e - b l o c k ; 
 
                     m a r g i n - r i g h t :   2 p x ; 
 
                     a n i m a t i o n :   $ { n s } - t y p i n g   1 . 4 s   i n f i n i t e   b o t h ; 
 
                 } 
 
                 
 
                 . $ { n s } - t y p i n g - i n d i c a t o r   s p a n : n t h - c h i l d ( 2 )   { 
 
                     a n i m a t i o n - d e l a y :   0 . 2 s ; 
 
                 } 
 
                 
 
                 . $ { n s } - t y p i n g - i n d i c a t o r   s p a n : n t h - c h i l d ( 3 )   { 
 
                     a n i m a t i o n - d e l a y :   0 . 4 s ; 
 
                 } 
 
                 
 
                 @ k e y f r a m e s   $ { n s } - t y p i n g   { 
 
                     0 %   {   t r a n s f o r m :   t r a n s l a t e Y ( 0 p x ) ;   } 
 
                     3 0 %   {   t r a n s f o r m :   t r a n s l a t e Y ( - 5 p x ) ;   } 
 
                     6 0 % ,   1 0 0 %   {   t r a n s f o r m :   t r a n s l a t e Y ( 0 p x ) ;   } 
 
                 } 
 
                 
 
                 / *   S e n d i n g   s p i n n e r   * / 
 
                 . $ { n s } - s e n d i n g - s p i n n e r   { 
 
                     d i s p l a y :   f l e x ; 
 
                     a l i g n - i t e m s :   c e n t e r ; 
 
                     a l i g n - s e l f :   f l e x - e n d ; 
 
                     m a r g i n :   8 p x   2 0 p x   8 p x   0 ; 
 
                     o p a c i t y :   0 ; 
 
                     t r a n s i t i o n :   o p a c i t y   0 . 3 s   e a s e ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d i n g - s p i n n e r . $ { n s } - a c t i v e   { 
 
                     o p a c i t y :   1 ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d i n g - s p i n n e r - d o t s   { 
 
                     d i s p l a y :   f l e x ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d i n g - s p i n n e r - d o t s   s p a n   { 
 
                     h e i g h t :   8 p x ; 
 
                     w i d t h :   8 p x ; 
 
                     b a c k g r o u n d - c o l o r :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                     b o r d e r - r a d i u s :   5 0 % ; 
 
                     m a r g i n - r i g h t :   4 p x ; 
 
                     a n i m a t i o n :   $ { n s } - s e n d i n g - p u l s e   1 . 5 s   i n f i n i t e   e a s e - i n - o u t   b o t h ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d i n g - s p i n n e r - d o t s   s p a n : n t h - c h i l d ( 2 )   { 
 
                     a n i m a t i o n - d e l a y :   0 . 2 s ; 
 
                 } 
 
                 
 
                 . $ { n s } - s e n d i n g - s p i n n e r - d o t s   s p a n : n t h - c h i l d ( 3 )   { 
 
                     a n i m a t i o n - d e l a y :   0 . 4 s ; 
 
                     m a r g i n - r i g h t :   0 ; 
 
                 } 
 
                 
 
                 @ k e y f r a m e s   $ { n s } - s e n d i n g - p u l s e   { 
 
                     0 % ,   8 0 % ,   1 0 0 %   {   t r a n s f o r m :   s c a l e ( 0 . 8 ) ;   o p a c i t y :   0 . 6 ;   } 
 
                     4 0 %   {   t r a n s f o r m :   s c a l e ( 1 . 2 ) ;   o p a c i t y :   1 ;   } 
 
                 } 
 
                 
 
                 / *   P r e d e f i n e d   q u e s t i o n s   * / 
 
                 . $ { n s } - p r e d e f i n e d - c o n t a i n e r   { 
 
                     d i s p l a y :   f l e x ; 
 
                     f l e x - w r a p :   w r a p ; 
 
                     g a p :   8 p x ; 
 
                     p a d d i n g :   1 0 p x   1 5 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - p r e d e f i n e d - t o p   { 
 
                     b o r d e r - b o t t o m :   1 p x   s o l i d   r g b a ( 0 , 0 , 0 , 0 . 1 ) ; 
 
                 } 
 
                 
 
                 . $ { n s } - p r e d e f i n e d - b o t t o m   { 
 
                     b o r d e r - t o p :   1 p x   s o l i d   r g b a ( 0 , 0 , 0 , 0 . 1 ) ; 
 
                 } 
 
                 
 
                 . $ { n s } - p r e d e f i n e d - b u t t o n   { 
 
                     b o r d e r :   n o n e ; 
 
                     p a d d i n g :   8 p x   1 6 p x ; 
 
                     f o n t - s i z e :   1 4 p x ; 
 
                     c u r s o r :   p o i n t e r ; 
 
                     t r a n s i t i o n :   b a c k g r o u n d - c o l o r   0 . 2 s ; 
 
                     w h i t e - s p a c e :   n o w r a p ; 
 
                     t e x t - o v e r f l o w :   e l l i p s i s ; 
 
                     o v e r f l o w :   h i d d e n ; 
 
                     m a x - w i d t h :   2 0 0 p x ; 
 
                     b a c k g r o u n d - c o l o r :   $ { t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . b u t t o n C o l o r } ; 
 
                     c o l o r :   $ { t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . t e x t C o l o r } ; 
 
                 } 
 
                 
 
                 . $ { n s } - p r e d e f i n e d - b u t t o n : h o v e r   { 
 
                     b a c k g r o u n d - c o l o r :   $ { t h i s . c o n f i g . p r e d e f i n e d Q u e s t i o n s . h o v e r C o l o r } ; 
 
                 } 
 
                 
 
                 . $ { n s } - p r e d e f i n e d - b u t t o n   { 
 
                     b o r d e r - r a d i u s :   1 6 p x ; 
 
                 } 
 
                 
 
                 . $ { n s } - p r e d e f i n e d - p i l l   { 
 
                     b o r d e r - r a d i u s :   2 4 p x ; 
 
                 } 
 
                 
 
                 / *   M a r k d o w n   f o r m a t t i n g   f o r   m e s s a g e s   * / 
 
                 . $ { n s } - m e s s a g e   a   { 
 
                     c o l o r :   $ { t h e m e . p r i m a r y C o l o r } ; 
 
                     t e x t - d e c o r a t i o n :   n o n e ; 
 
                 } 
 
                 . $ { n s } - m e s s a g e   a : h o v e r   { 
 
                     t e x t - d e c o r a t i o n :   u n d e r l i n e ; 
 
                 } 
 
                 . $ { n s } - m e s s a g e   c o d e   { 
 
                     f o n t - f a m i l y :   m o n o s p a c e ; 
 
                     b a c k g r o u n d - c o l o r :   r g b a ( 0 , 0 , 0 , 0 . 0 5 ) ; 
 
                     p a d d i n g :   2 p x   4 p x ; 
 
                     b o r d e r - r a d i u s :   4 p x ; 
 
                 } 
 
                 . $ { n s } - m e s s a g e   p r e   { 
 
                     b a c k g r o u n d - c o l o r :   r g b a ( 0 , 0 , 0 , 0 . 0 5 ) ; 
 
                     p a d d i n g :   1 0 p x ; 
 
                     b o r d e r - r a d i u s :   4 p x ; 
 
                     o v e r f l o w - x :   a u t o ; 
 
                 } 
 
             ` ; 
 
             
 
             / /   C r e a t e   a n d   a p p e n d   s t y l e   e l e m e n t 
 
             c o n s t   s t y l e   =   d o c u m e n t . c r e a t e E l e m e n t ( ' s t y l e ' ) ; 
 
             s t y l e . t e x t C o n t e n t   =   c s s ; 
 
             d o c u m e n t . h e a d . a p p e n d C h i l d ( s t y l e ) ; 
 
         } 
 
         
 
         / * * 
 
           *   A t t a c h   e v e n t   l i s t e n e r s   t o   w i d g e t   e l e m e n t s 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ a t t a c h E v e n t L i s t e n e r s ( )   { 
 
             / /   T o g g l e   c h a t   p a n e l   w h e n   c h a t   b u t t o n   i s   c l i c k e d 
 
             t h i s . e l e m e n t s . c h a t B u t t o n . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   ( )   = >   { 
 
                 t h i s . t o g g l e C h a t ( ) ; 
 
             } ) ; 
 
             
 
             / /   C l o s e   c h a t   p a n e l   w h e n   c l o s e   b u t t o n   i s   c l i c k e d 
 
             t h i s . e l e m e n t s . c l o s e B u t t o n . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   ( )   = >   { 
 
                 t h i s . h i d e C h a t ( ) ; 
 
             } ) ; 
 
             
 
             / /   S e n d   m e s s a g e   w h e n   s e n d   b u t t o n   i s   c l i c k e d 
 
             t h i s . e l e m e n t s . s e n d B u t t o n . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   ( )   = >   { 
 
                 t h i s . s e n d M e s s a g e ( ) ; 
 
             } ) ; 
 
             
 
             / /   S e n d   m e s s a g e   w h e n   E n t e r   k e y   i s   p r e s s e d   i n   i n p u t 
 
             t h i s . e l e m e n t s . c h a t I n p u t . a d d E v e n t L i s t e n e r ( ' k e y p r e s s ' ,   ( e )   = >   { 
 
                 i f   ( e . k e y   = = =   ' E n t e r ' )   { 
 
                     t h i s . s e n d M e s s a g e ( ) ; 
 
                 } 
 
             } ) ; 
 
         } 
 
         
 
         / * * 
 
           *   C o n n e c t   t o   W e b S o c k e t   s e r v e r 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ c o n n e c t W e b S o c k e t ( )   { 
 
             t r y   { 
 
                 / /   C l o s e   e x i s t i n g   c o n n e c t i o n   i f   a n y 
 
                 i f   ( t h i s . s o c k e t )   { 
 
                     t h i s . s o c k e t . c l o s e ( ) ; 
 
                 } 
 
                 
 
                 t h i s . s o c k e t   =   n e w   W e b S o c k e t ( t h i s . c o n f i g . w e b s o c k e t . u r l ) ; 
 
                 
 
                 t h i s . s o c k e t . o n o p e n   =   ( )   = >   { 
 
                     t h i s . i s C o n n e c t e d   =   t r u e ; 
 
                     t h i s . _ s h o w C o n n e c t i o n S t a t u s ( ' C o n n e c t e d ' ) ; 
 
                 } ; 
 
                 
 
                 t h i s . s o c k e t . o n c l o s e   =   ( )   = >   { 
 
                     t h i s . i s C o n n e c t e d   =   f a l s e ; 
 
                     t h i s . _ a d d M e s s a g e ( ' s y s t e m ' ,   ' C o n n e c t i o n   c l o s e d .   P l e a s e   t r y   a g a i n   l a t e r . ' ) ; 
 
                 } ; 
 
                 
 
                 t h i s . s o c k e t . o n e r r o r   =   ( )   = >   { 
 
                     t h i s . i s C o n n e c t e d   =   f a l s e ; 
 
                     t h i s . _ a d d M e s s a g e ( ' s y s t e m ' ,   ' C o n n e c t i o n   e r r o r .   P l e a s e   t r y   a g a i n   l a t e r . ' ) ; 
 
                 } ; 
 
                 
 
                 t h i s . s o c k e t . o n m e s s a g e   =   ( e v e n t )   = >   { 
 
                     t r y   { 
 
                         c o n s t   d a t a   =   J S O N . p a r s e ( e v e n t . d a t a ) ; 
 
                         i f   ( d a t a   & &   d a t a . c o n t e n t   ! = =   u n d e f i n e d )   { 
 
                             t h i s . _ h a n d l e I n c o m i n g M e s s a g e ( d a t a ) ; 
 
                         } 
 
                     }   c a t c h   ( e )   { 
 
                         t h i s . _ a d d M e s s a g e ( ' s y s t e m ' ,   ' R e c e i v e d   m e s s a g e   i n   a n   i n v a l i d   f o r m a t ' ) ; 
 
                         c o n s o l e . e r r o r ( ' E r r o r   p a r s i n g   m e s s a g e : ' ,   e ) ; 
 
                     } 
 
                 } ; 
 
             }   c a t c h   ( e r r o r )   { 
 
                 c o n s o l e . e r r o r ( ' F a i l e d   t o   c o n n e c t   t o   W e b S o c k e t   s e r v e r : ' ,   e r r o r ) ; 
 
                 t h i s . _ a d d M e s s a g e ( ' s y s t e m ' ,   ' F a i l e d   t o   c o n n e c t :   '   +   e r r o r . m e s s a g e ) ; 
 
             } 
 
         } 
 
 
 
         / * * 
 
           *   H a n d l e   i n c o m i n g   m e s s a g e s   w i t h   s t r e a m i n g   s u p p o r t 
 
           *   @ p a r a m   { O b j e c t }   d a t a   -   M e s s a g e   d a t a 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ h a n d l e I n c o m i n g M e s s a g e ( d a t a )   { 
 
             / /   H a n d l e   e r r o r   m e s s a g e s 
 
             i f   ( d a t a . t y p e   = = =   ' e r r o r ' )   { 
 
                 t h i s . _ a d d M e s s a g e ( ' s y s t e m ' ,   ' E r r o r :   '   +   d a t a . c o n t e n t ) ; 
 
                 t h i s . _ r e m o v e T y p i n g I n d i c a t o r ( ) ; 
 
                 t h i s . _ r e m o v e S e n d i n g S p i n n e r ( ) ; 
 
                 r e t u r n ; 
 
             } 
 
             
 
             / /   E x t r a c t   m e s s a g e   I D   f r o m   t h e   d a t a ,   o r   c r e a t e   a   d e f a u l t   o n e 
 
             c o n s t   m e s s a g e I d   =   d a t a . m e s s a g e I d   | |   ` d e f a u l t _ $ { D a t e . n o w ( ) } ` ; 
 
             
 
             / /   C h e c k   i f   t h i s   i s   a   n e w   m e s s a g e   o r   a   c o n t i n u a t i o n   o f   a n   e x i s t i n g   o n e 
 
             i f   ( ! t h i s . s t r e a m S t a t e . i s S t r e a m i n g   | |   ( t h i s . s t r e a m S t a t e . c u r r e n t M e s s a g e I d   ! = =   m e s s a g e I d ) )   { 
 
                 / /   I f   w e   w e r e   a l r e a d y   s t r e a m i n g   b u t   g o t   a   n e w   m e s s a g e   I D ,   f i n a l i z e   t h e   p r e v i o u s   m e s s a g e 
 
                 i f   ( t h i s . s t r e a m S t a t e . i s S t r e a m i n g   & &   t h i s . s t r e a m S t a t e . c u r r e n t B o t M e s s a g e )   { 
 
                     t h i s . _ f i n a l i z e M e s s a g e ( ) ; 
 
                 } 
 
                 
 
                 / /   S t a r t   a   n e w   m e s s a g e 
 
                 t h i s . s t r e a m S t a t e . i s S t r e a m i n g   =   t r u e ; 
 
                 t h i s . s t r e a m S t a t e . c u r r e n t M e s s a g e I d   =   m e s s a g e I d ; 
 
                 t h i s . s t r e a m S t a t e . a c t i v e M e s s a g e C o n t e n t   =   ' ' ; 
 
                 t h i s . s t r e a m S t a t e . c u r r e n t B o t M e s s a g e   =   n u l l ; 
 
                 t h i s . _ s h o w T y p i n g I n d i c a t o r ( ) ; 
 
             } 
 
             
 
             / /   A p p e n d   c o n t e n t   t o   a c t i v e   m e s s a g e 
 
             t h i s . s t r e a m S t a t e . a c t i v e M e s s a g e C o n t e n t   + =   d a t a . c o n t e n t ; 
 
             
 
             / /   U p d a t e   t h e   m e s s a g e   i n   t h e   U I 
 
             t h i s . _ u p d a t e S t r e a m i n g M e s s a g e ( t h i s . s t r e a m S t a t e . a c t i v e M e s s a g e C o n t e n t ) ; 
 
             
 
             / /   I f   t h i s   i s   t h e   f i n a l   c h u n k ,   f i n a l i z e   t h e   m e s s a g e 
 
             i f   ( d a t a . f i n a l )   { 
 
                 t h i s . _ f i n a l i z e M e s s a g e ( ) ; 
 
             } 
 
         } 
 
         
 
         / * * 
 
           *   S h o w   t y p i n g   i n d i c a t o r 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ s h o w T y p i n g I n d i c a t o r ( )   { 
 
             i f   ( ! t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r )   { 
 
                 t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
                 t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r . c l a s s N a m e   =   ` $ { t h i s . n a m e s p a c e } - t y p i n g - i n d i c a t o r ` ; 
 
                 t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r . i n n e r H T M L   =   ' < s p a n > < / s p a n > < s p a n > < / s p a n > < s p a n > < / s p a n > ' ; 
 
                 t h i s . e l e m e n t s . c h a t M e s s a g e s . a p p e n d C h i l d ( t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r ) ; 
 
                 t h i s . e l e m e n t s . c h a t M e s s a g e s . s c r o l l T o p   =   t h i s . e l e m e n t s . c h a t M e s s a g e s . s c r o l l H e i g h t ; 
 
             } 
 
         } 
 
         
 
         / * * 
 
           *   R e m o v e   t y p i n g   i n d i c a t o r 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ r e m o v e T y p i n g I n d i c a t o r ( )   { 
 
             i f   ( t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r )   { 
 
                 t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r . r e m o v e ( ) ; 
 
                 t h i s . s t r e a m S t a t e . t y p i n g I n d i c a t o r   =   n u l l ; 
 
             } 
 
         } 
 
         
 
         / * * 
 
           *   U p d a t e   t h e   c o n t e n t   o f   a   s t r e a m i n g   m e s s a g e 
 
           *   @ p a r a m   { s t r i n g }   c o n t e n t   -   M e s s a g e   c o n t e n t 
 
           *   @ p r i v a t e 
 
           * / 
 
         _ u p d a t e S t r e a m i n g M e s s a g e ( c o n t e n t )   { 
 
             / /   C r e a t e   o r   u p d a t e   t h e   c u r r e n t   b o t   m e s s a g e 
 
             i f   ( ! t h i s . s t r e a m S t a t e . c u r r e n t B o t M e s s a g e )   { 
 
                 t h i s . _ r e m o v e T y p i n g I n d i c a t o r ( ) ; 
 
                 
 
                 / /   C r e a t e   w r a p p e r   w i t h   a v a t a r 
 
                 c o n s t   m e s s a g e W r a p p e r   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ; 
 
 