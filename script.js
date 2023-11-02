window.addEventListener("load", init);

function init() {
    let rot = 0;

    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById("canvas"),
        alpha: true
    });

    const scene = new THREE.Scene();

    scene.fog = new THREE.Fog(0xaaaaaa, 50, 2000);

    const camera = new THREE.PerspectiveCamera(70, 1000);

    const geometry = new THREE.Geometry();

    for (let i = 0; i < 10000; i++) {
        const star = new THREE.Vector3();
        star.x = THREE.Math.randFloatSpread(2000);
        star.y = THREE.Math.randFloatSpread(2000);
        star.z = THREE.Math.randFloatSpread(2000);

        geometry.vertices.push(star)
    }

    const material = new THREE.PointsMaterial({
        color: 0xffffff
    });
    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    function render() {
        rot += 0.1;
        const radian = (rot * Math.PI) / 180;
        camera.position.x = 1000 * Math.sin(radian);
        camera.position.z = 1000 * Math.cos(radian);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    render();

    window.addEventListener("resize", onResize);

    function onResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
    onResize();
}