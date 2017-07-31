class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    p @user
    if @user.save
      login(@user)
      render :show
    else
      @user.errors = @user.errors.full_messages
      render json: @user.errors, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username,:password)
  end
end
