<script>

</script>

<header>
    <img src="src\lib\img\icon.jpg" alt="icon">
    <nav>
        <h1>Batchelor Monkey Puzzle Website</h1>
        <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Contents</li>
        </ul>
    </nav>
</header>

<style>
    header{
        background: linear-gradient(90deg, rgba(230,242,227,1) 1%, rgb(23, 195, 166) 35%, rgb(26, 170, 132) 57%, rgb(2, 129, 116) 80%);
        justify-content: center;
        align-items: center;
        padding: 0.6em;
    }
    img{
        height: 100px;
        padding-right: 3em;
        
    }
    h1{
        font-size: 1.1em;
        text-transform: uppercase;
        color: white;
        text-shadow: 1px 1.5px 8px rgb(1, 17, 1);
        text-decoration: underline;
        letter-spacing: 0.2em;
    }
    header, ul{
        display: flex;
    }
    ul{
        list-style: none;
        display: flex;
        justify-content: flex-end;
    }
    li{
        margin-left: 2em;
        background-color: rgb(3, 100, 76);
        border: dotted 2px white;
        padding: 0.4em;
        padding-inline: 0.8em;
        border-radius: 0.3em;
        color: white;
        font-size: smaller;
        letter-spacing: 0.2em;
    }

    li:hover{
        background-color: white;
        color: #333;
    }
    nav{
        display: flex;
        flex-direction: column;
        align-self: center; 
        
    }
</style>