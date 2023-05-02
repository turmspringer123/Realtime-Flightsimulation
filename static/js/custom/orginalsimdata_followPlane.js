function toggleFollowPlane() {
    followPlane = followPlane + 1;
	if (followPlane === 4) {
		followPlane = 1
	}
    if (followPlane === 1) {
        $("#followMode").text("Unfollow Plane")
        $("#followModeButton").removeClass("btn-danger").addClass("btn-primary")
		marker.addTo(map);
    }
    if (followPlane === 2) {
        $("#followMode").text("Hide Plane")
        $("#followModeButton").removeClass("btn-primary").addClass("btn-danger")
    }
	if (followPlane === 3) {
        $("#followMode").text("Follow Plane")
		marker.remove();
    }
}