class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
            params[:user][:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      @user.errors = 'invalid credentials'
      render json: @user.errors, status: 401
    end
  end

  def destroy
    if(current_user)
      logout
      render json: {}
    else
      render json: 'Nobody signed in', status: 404
    end
  end

end
